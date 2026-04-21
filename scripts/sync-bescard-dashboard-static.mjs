import fs from 'node:fs/promises'
import path from 'node:path'

const ROOT_DIR = process.cwd()
const DATA_DIR = path.join(ROOT_DIR, 'data')
const SOURCE_FILE = path.join(DATA_DIR, 'dashboard-page-with-floor-price.json')
const OUTPUT_DIR = path.join(DATA_DIR, 'dashboard-static')
const API_URL = 'https://bescard.com/api/v1/dob-item/dashboard-dob-item-with-floor-price'

function toPosix(filePath) {
  return filePath.split(path.sep).join('/')
}

function relativeToRoot(filePath) {
  return toPosix(path.relative(ROOT_DIR, filePath))
}

function getExtension(value) {
  if (typeof value !== 'string') {
    return ''
  }

  const lastDot = value.lastIndexOf('.')
  if (lastDot === -1) {
    return ''
  }

  return value.slice(lastDot).toLowerCase()
}

function parseCdnValue(value) {
  if (typeof value !== 'string' || value.length === 0) {
    return null
  }

  const parts = value.split('-')
  if (parts.length < 2 || !parts[1]) {
    return null
  }

  const cdnId = parts[1]

  return {
    sourceValue: value,
    cdnId,
    extension: getExtension(value),
    fileName: `${cdnId}${getExtension(value)}`,
    sourceUrl: `https://bescard.com/cdn/${cdnId}`,
  }
}

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true })
}

async function writeJson(filePath, value) {
  await fs.writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8')
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}

async function fetchWithRetry(url, init, label, retries = 3) {
  let lastError

  for (let attempt = 1; attempt <= retries; attempt += 1) {
    try {
      const response = await fetch(url, init)
      if (!response.ok) {
        const body = await response.text()
        throw new Error(`${label} failed with ${response.status}: ${body.slice(0, 300)}`)
      }
      return response
    } catch (error) {
      lastError = error
      if (attempt < retries) {
        await new Promise((resolve) => {
          setTimeout(resolve, attempt * 500)
        })
      }
    }
  }

  throw lastError
}

function buildDashboardDetailRequest(cluster) {
  return {
    dobId: cluster.dobId,
    dobType: cluster.dobType,
  }
}

async function fetchDashboardDetail(cluster) {
  const requestPayload = buildDashboardDetailRequest(cluster)
  const response = await fetchWithRetry(
    API_URL,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(requestPayload),
    },
    `detail ${cluster.clusterId}`,
  )

  return {
    requestPayload,
    responseJson: await response.json(),
  }
}

async function downloadAsset(asset, targetPath) {
  if (!asset) {
    return null
  }

  if (!(await fileExists(targetPath))) {
    const response = await fetchWithRetry(asset.sourceUrl, {}, `asset ${asset.cdnId}`)
    const arrayBuffer = await response.arrayBuffer()
    await fs.writeFile(targetPath, Buffer.from(arrayBuffer))
  }

  return {
    ...asset,
    localPath: relativeToRoot(targetPath),
  }
}

async function loadSourceClusters() {
  const content = await fs.readFile(SOURCE_FILE, 'utf8')
  const parsed = JSON.parse(content)
  const items = parsed?.data?.items

  if (!Array.isArray(items)) {
    throw new Error(`Invalid source file: ${relativeToRoot(SOURCE_FILE)}`)
  }

  return items
}

async function main() {
  const clusters = await loadSourceClusters()
  await ensureDir(OUTPUT_DIR)

  const aggregate = {
    generatedAt: new Date().toISOString(),
    sourceFile: relativeToRoot(SOURCE_FILE),
    apiUrl: API_URL,
    clusterCount: clusters.length,
    clusters: [],
  }

  for (const cluster of clusters) {
    const clusterDir = path.join(OUTPUT_DIR, 'clusters', cluster.clusterId)
    const assetsDir = path.join(clusterDir, 'assets')
    const itemsDir = path.join(assetsDir, 'items')

    await ensureDir(itemsDir)

    console.log(`sync cluster ${cluster.clusterId} ${cluster.dobName}`)

    const { requestPayload, responseJson } = await fetchDashboardDetail(cluster)
    const requestFile = path.join(clusterDir, 'api.request.json')
    const responseRawFile = path.join(clusterDir, 'api.response.raw.json')
    const rawDetailFile = path.join(clusterDir, 'detail.raw.json')

    await writeJson(requestFile, {
      apiUrl: API_URL,
      method: 'POST',
      body: requestPayload,
    })
    await writeJson(responseRawFile, responseJson)
    await writeJson(rawDetailFile, responseJson)

    const coverAsset = parseCdnValue(cluster.cover)
    const coverTarget = coverAsset
      ? path.join(assetsDir, coverAsset.fileName)
      : null
    const localCover = coverTarget ? await downloadAsset(coverAsset, coverTarget) : null

    const itemsByGroup = {}
    let itemCount = 0

    for (const [groupName, entries] of Object.entries(responseJson?.data ?? {})) {
      const normalizedEntries = []

      for (const entry of Array.isArray(entries) ? entries : []) {
        const itemAsset = parseCdnValue(entry.dataContent)
        const itemTarget = itemAsset
          ? path.join(itemsDir, itemAsset.fileName)
          : null
        const localItemAsset = itemTarget ? await downloadAsset(itemAsset, itemTarget) : null

        normalizedEntries.push({
          ...entry,
          asset: localItemAsset,
        })
      }

      itemsByGroup[groupName] = normalizedEntries
      itemCount += normalizedEntries.length
    }

    const manifest = {
      cluster,
      coverAsset: localCover,
      requestFile: relativeToRoot(requestFile),
      responseRawFile: relativeToRoot(responseRawFile),
      rawDetailFile: relativeToRoot(rawDetailFile),
      itemsByGroup,
      itemCount,
      groupNames: Object.keys(itemsByGroup),
    }

    const manifestFile = path.join(clusterDir, 'manifest.json')
    const clusterFile = path.join(clusterDir, 'cluster.json')

    await writeJson(manifestFile, manifest)
    await writeJson(clusterFile, {
      cluster,
      coverAsset: localCover,
      requestFile: relativeToRoot(requestFile),
      responseRawFile: relativeToRoot(responseRawFile),
      rawDetailFile: relativeToRoot(rawDetailFile),
      manifestFile: relativeToRoot(manifestFile),
      itemCount,
      groupNames: manifest.groupNames,
    })

    aggregate.clusters.push({
      clusterId: cluster.clusterId,
      dobId: cluster.dobId,
      dobType: cluster.dobType,
      dobName: cluster.dobName,
      coverAsset: localCover,
      requestFile: relativeToRoot(requestFile),
      responseRawFile: relativeToRoot(responseRawFile),
      clusterFile: relativeToRoot(clusterFile),
      manifestFile: relativeToRoot(manifestFile),
      rawDetailFile: relativeToRoot(rawDetailFile),
      itemCount,
      groupNames: manifest.groupNames,
    })
  }

  const aggregateFile = path.join(OUTPUT_DIR, 'index.json')
  await writeJson(aggregateFile, aggregate)

  console.log(`done: ${relativeToRoot(aggregateFile)}`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
