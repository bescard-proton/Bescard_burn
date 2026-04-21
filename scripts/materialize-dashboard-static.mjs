import fs from 'node:fs/promises'
import path from 'node:path'

const ROOT_DIR = process.cwd()
const ARCHIVE_DIR = path.join(ROOT_DIR, 'data', 'dashboard-static')
const INDEX_FILE = path.join(ARCHIVE_DIR, 'index.json')
const PUBLIC_DIR = path.join(ROOT_DIR, 'public', 'assets', 'dashboard')
const OUTPUT_MODULE = path.join(ROOT_DIR, 'src', 'constant', 'BescardDashboardData.ts')

function toPosix(filePath) {
  return filePath.split(path.sep).join('/')
}

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true })
}

async function copyFile(sourcePath, targetPath) {
  await ensureDir(path.dirname(targetPath))
  await fs.copyFile(sourcePath, targetPath)
}

async function readJson(filePath) {
  return JSON.parse(await fs.readFile(filePath, 'utf8'))
}

function parseNumber(value) {
  if (typeof value !== 'string' || value.trim() === '') {
    return null
  }

  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : null
}

function normalizeCluster(cluster, manifest) {
  const clusterPublicDir = path.join('assets', 'dashboard', 'clusters', cluster.clusterId)
  const coverAsset = manifest.coverAsset
    ? {
        sourceValue: manifest.coverAsset.sourceValue,
        cdnId: manifest.coverAsset.cdnId,
        extension: manifest.coverAsset.extension,
        fileName: manifest.coverAsset.fileName,
        sourceUrl: manifest.coverAsset.sourceUrl,
        publicPath: toPosix(path.join(clusterPublicDir, manifest.coverAsset.fileName)),
      }
    : null

  const groups = Object.entries(manifest.itemsByGroup).map(([groupName, entries]) => ({
    name: groupName,
    count: entries.length,
      items: entries.map((entry) => ({
        dobItemId: entry.dobItemId,
        dataType: entry.dataType,
      dataContent: entry.dataContent,
      dobName: entry.dobName,
      rareType: entry.rareType,
        floorPrice: entry.floorPrice,
        floorPriceValue: parseNumber(entry.floorPrice),
        asset: entry.asset
          ? {
              sourceValue: entry.asset.sourceValue,
              cdnId: entry.asset.cdnId,
              extension: entry.asset.extension,
              fileName: entry.asset.fileName,
              sourceUrl: entry.asset.sourceUrl,
              publicPath: toPosix(path.join(clusterPublicDir, 'items', entry.asset.fileName)),
            }
          : null,
      })),
  }))

  return {
    clusterId: cluster.clusterId,
    dobId: cluster.dobId,
    dobType: cluster.dobType,
    dobName: cluster.dobName,
    openTime: cluster.openTime,
    contractAddress: cluster.contractAddress,
    issuer: cluster.issuer,
    issuerLogo: cluster.issuerLogo,
    onShelves: cluster.onShelves,
    floorPrice: cluster.floorPrice,
    floorPriceValue: parseNumber(cluster.floorPrice),
    change24H: cluster.change24H,
    change24HValue: parseNumber(cluster.change24H),
    dobTier: cluster.dobTier,
    isAirDrop: cluster.isAirDrop,
    coverAsset,
    itemCount: manifest.itemCount,
    groupNames: manifest.groupNames,
    groups,
  }
}

function buildModuleSource(clusters) {
  const stats = {
    totalClusters: clusters.length,
    onShelves: clusters.filter((cluster) => cluster.onShelves).length,
    airDrops: clusters.filter((cluster) => cluster.isAirDrop).length,
    totalItems: clusters.reduce((sum, cluster) => sum + cluster.itemCount, 0),
  }

  return `export type DashboardAsset = {
  sourceValue: string
  cdnId: string
  extension: string
  fileName: string
  sourceUrl: string
  publicPath: string
}

export type DashboardItem = {
  dobItemId: string
  dataType: number
  dataContent: string
  dobName: string
  rareType: number
  floorPrice: string
  floorPriceValue: number | null
  asset: DashboardAsset | null
}

export type DashboardGroup = {
  name: string
  count: number
  items: DashboardItem[]
}

export type DashboardCluster = {
  clusterId: string
  dobId: string
  dobType: number
  dobName: string
  openTime: string
  contractAddress: string
  issuer: string
  issuerLogo: string
  onShelves: boolean
  floorPrice: string
  floorPriceValue: number | null
  change24H: string
  change24HValue: number | null
  dobTier: string
  isAirDrop: boolean
  coverAsset: DashboardAsset | null
  itemCount: number
  groupNames: string[]
  groups: DashboardGroup[]
}

export const dashboardStats = ${JSON.stringify(stats, null, 2)} as const

export const dashboardClusters: DashboardCluster[] = ${JSON.stringify(clusters, null, 2)}
`
}

async function main() {
  const archiveIndex = await readJson(INDEX_FILE)
  const clusters = []

  await fs.rm(PUBLIC_DIR, { recursive: true, force: true })
  await ensureDir(PUBLIC_DIR)
  await ensureDir(path.dirname(OUTPUT_MODULE))

  for (const clusterEntry of archiveIndex.clusters) {
    const manifest = await readJson(path.join(ROOT_DIR, clusterEntry.manifestFile))
    const normalized = normalizeCluster(manifest.cluster, manifest)
    clusters.push(normalized)

    if (normalized.coverAsset) {
      await copyFile(
        path.join(ROOT_DIR, manifest.coverAsset.localPath),
        path.join(ROOT_DIR, 'public', normalized.coverAsset.publicPath),
      )
    }

    for (const group of normalized.groups) {
      for (const item of group.items) {
        if (!item.asset) {
          continue
        }

        const sourceEntry = manifest.itemsByGroup[group.name].find(
          (candidate) => candidate.dobItemId === item.dobItemId,
        )

        if (!sourceEntry?.asset?.localPath) {
          continue
        }

        await copyFile(
          path.join(ROOT_DIR, sourceEntry.asset.localPath),
          path.join(ROOT_DIR, 'public', item.asset.publicPath),
        )
      }
    }
  }

  await fs.writeFile(OUTPUT_MODULE, `${buildModuleSource(clusters)}\n`, 'utf8')
  console.log(`materialized ${clusters.length} clusters`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
