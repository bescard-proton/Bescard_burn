import { ccc } from '@ckb-ccc/core'
import { findCluster } from '@ckb-ccc/spore'

import { publicAsset } from '@/constant/APP'
import { CKB_NETWORK_CLIENT } from '@/constant/CKB'
import {
  getBescardDashboardCluster,
  getBescardDashboardItemByFileId,
} from '@/constant/BescardDashboard'
import { type DashboardCluster, type DashboardItem } from '@/constant/BescardDashboardData'
import joyIdWallet from '@/lib/wallet/JoyIDWallet'
import { resolveSporeRenderData, type SporeRenderData } from './spore-preview'

type OwnedHomeSporeBase = {
  clusterId: string
  clusterName: string
  contentType: string
  decodeInfo: SporeRenderData | null
  id: string
  releaseCkb: string | null
  sporeId: string
  tokenKey: string
}

export type OwnedBescard = OwnedHomeSporeBase & {
  dashboardCluster: DashboardCluster
  kind: 'bescard'
  matchedItemId: string | null
  name: string
  previewSrc: string | null
  rareType: number
  storedValue: string | null
}

export type OwnedOtherDob = OwnedHomeSporeBase & {
  clusterHash: string | null
  kind: 'other-dob'
  name: string
  previewSrc: string | null
  storedValue: string | null
}

export type BescardScanProgress = {
  bescards: number
  dobs: number
  scanned: number
}

type WalletSpore = Awaited<ReturnType<typeof joyIdWallet.getSpores>> extends AsyncIterable<infer T>
  ? T
  : never

const DEFAULT_OTHER_SPORE_PREVIEW = publicAsset('assets/common/default-avatar.png')
const DOB_DECODE_CONCURRENCY = 6
const CLUSTER_META_CACHE_PREFIX = 'bescard:cluster-meta:'
const clusterMetaCache = new Map<
  string,
  Promise<{ clusterHash: string | null; clusterName: string | null }> | { clusterHash: string | null; clusterName: string | null }
>()

function createTaskPool(concurrency: number) {
  const queue: Array<() => Promise<void>> = []
  const idleResolvers: Array<() => void> = []
  let activeCount = 0

  function resolveIdleIfNeeded() {
    if (activeCount > 0 || queue.length > 0) {
      return
    }

    while (idleResolvers.length > 0) {
      idleResolvers.shift()?.()
    }
  }

  function runNext() {
    while (activeCount < concurrency && queue.length > 0) {
      const task = queue.shift()

      if (!task) {
        continue
      }

      activeCount += 1

      void task().finally(() => {
        activeCount -= 1
        runNext()
        resolveIdleIfNeeded()
      })
    }
  }

  return {
    add(task: () => Promise<void>) {
      queue.push(task)
      runNext()
    },
    onIdle() {
      if (activeCount === 0 && queue.length === 0) {
        return Promise.resolve()
      }

      return new Promise<void>((resolve) => {
        idleResolvers.push(resolve)
      })
    },
  }
}

function normalizeHex(value?: string | null) {
  if (!value) {
    return ''
  }

  return ccc.hexFrom(value).toLowerCase()
}

function shortenHex(value: string, head = 8, tail = 6) {
  if (value.length <= head + tail) {
    return value
  }

  return `${value.slice(0, head)}...${value.slice(-tail)}`
}

function formatReleaseCkbAmount(shannonsText: string) {
  const value = ccc.fixedPointToString(BigInt(shannonsText))
  const [integer, decimal = ''] = value.split('.')
  return `${integer}.${decimal.padEnd(2, '0').slice(0, 2)}`
}

function getStorage() {
  if (typeof window === 'undefined') {
    return null
  }

  return window.localStorage
}

function getClusterMetaStorageKey(clusterId: string) {
  return `${CLUSTER_META_CACHE_PREFIX}${clusterId}`
}

function parseClusterMeta(raw: string | { clusterHash: string | null; clusterName: string | null }) {
  const parsed =
    typeof raw === 'string'
      ? (JSON.parse(raw) as { clusterHash?: string | null; clusterName?: string | null })
      : raw

  return {
    clusterHash: parsed.clusterHash ?? null,
    clusterName: parsed.clusterName ?? null,
  }
}

async function resolveClusterMeta(clusterId: string) {
  if (!clusterId) {
    return {
      clusterHash: null,
      clusterName: null,
    }
  }

  const normalizedClusterId = normalizeHex(clusterId)
  const cached = clusterMetaCache.get(normalizedClusterId)

  if (cached !== undefined) {
    return cached instanceof Promise ? cached : Promise.resolve(cached)
  }

  const task = (async () => {
    const storage = getStorage()
    const storageKey = getClusterMetaStorageKey(normalizedClusterId)

    if (storage) {
      const stored = storage.getItem(storageKey)

      if (stored) {
        return parseClusterMeta(stored)
      }
    }

    try {
      const found = await findCluster(CKB_NETWORK_CLIENT, normalizedClusterId)
      const clusterType = found?.cluster?.cellOutput.type
      const clusterMeta = {
        clusterHash: clusterType ? ccc.Script.from(clusterType).hash() : null,
        clusterName: found?.clusterData?.name?.trim() || null,
      }

      if (storage) {
        storage.setItem(storageKey, JSON.stringify(clusterMeta))
      }

      return clusterMeta
    } catch {
      return {
        clusterHash: null,
        clusterName: null,
      }
    }
  })()

  clusterMetaCache.set(normalizedClusterId, task)

  const resolved = await task
  clusterMetaCache.set(normalizedClusterId, resolved)
  return resolved
}

function getStaticAssetPath(item?: DashboardItem | null) {
  return item?.asset ? publicAsset(item.asset.publicPath) : null
}

function getClusterCoverPath(cluster: DashboardCluster) {
  return cluster.coverAsset ? publicAsset(cluster.coverAsset.publicPath) : DEFAULT_OTHER_SPORE_PREVIEW
}

function getPreviewFileId(previewSrc?: string | null) {
  if (!previewSrc) {
    return null
  }

  try {
    const url = new URL(previewSrc)
    const fileId = url.searchParams.get('fileId')?.trim().toLowerCase()
    return fileId || null
  } catch {
    return null
  }
}

function getMatchedBescardItem(clusterId: string, decodeInfo: SporeRenderData) {
  const fileId = getPreviewFileId(decodeInfo.previewSrc)

  if (!fileId) {
    return null
  }

  return getBescardDashboardItemByFileId(clusterId, fileId)
}

function buildOwnedBescard(
  item: WalletSpore,
  cluster: DashboardCluster,
  clusterId: string,
  sporeId: string,
): OwnedBescard {
  return {
    clusterId,
    clusterName: cluster.dobName,
    contentType: item.sporeData.contentType,
    dashboardCluster: cluster,
    decodeInfo: null,
    id: sporeId,
    kind: 'bescard',
    matchedItemId: null,
    name: `DOB ${shortenHex(sporeId)}`,
    previewSrc: getClusterCoverPath(cluster),
    rareType: 4,
    releaseCkb: formatReleaseCkbAmount(item.cell.cellOutput.capacity.toString()),
    sporeId,
    storedValue: null,
    tokenKey: sporeId.replace(/^0x/, ''),
  }
}

function buildOwnedOtherDob(item: WalletSpore, clusterId: string, sporeId: string): OwnedOtherDob {
  return {
    clusterId,
    clusterHash: null,
    clusterName: '',
    contentType: item.sporeData.contentType,
    decodeInfo: null,
    id: sporeId,
    kind: 'other-dob',
    name: `DOB ${shortenHex(sporeId)}`,
    previewSrc: null,
    releaseCkb: formatReleaseCkbAmount(item.cell.cellOutput.capacity.toString()),
    sporeId,
    storedValue: null,
    tokenKey: sporeId.replace(/^0x/, ''),
  }
}

function buildOwnedSpore(item: WalletSpore) {
  const clusterId = normalizeHex(item.sporeData.clusterId ? String(item.sporeData.clusterId) : '')
  const sporeId = normalizeHex(item.spore.cellOutput.type?.args ? String(item.spore.cellOutput.type.args) : '')

  if (!sporeId) {
    return null
  }

  const cluster = getBescardDashboardCluster(clusterId)

  if (!cluster) {
    return buildOwnedOtherDob(item, clusterId, sporeId)
  }

  return buildOwnedBescard(item, cluster, clusterId, sporeId)
}

async function resolveDecodeInfo(item: WalletSpore, current: OwnedBescard | OwnedOtherDob) {
  return resolveSporeRenderData({
    tokenKey: current.tokenKey,
    contentType: item.sporeData.contentType,
    content: item.sporeData.content,
  })
}

function applyBescardDecodeInfo(current: OwnedBescard, decodeInfo: SporeRenderData) {
  const matchedItem = getMatchedBescardItem(current.clusterId, decodeInfo)

  return {
    ...current,
    decodeInfo,
    matchedItemId: matchedItem?.dobItemId ?? current.matchedItemId,
    name: matchedItem?.dobName ?? current.name,
    previewSrc: getStaticAssetPath(matchedItem) ?? current.previewSrc,
    rareType: matchedItem?.rareType ?? current.rareType,
    storedValue: decodeInfo.storedValue,
  } satisfies OwnedBescard
}

function applyOtherDobDecodeInfo(current: OwnedOtherDob, decodeInfo: SporeRenderData) {
  return {
    ...current,
    decodeInfo,
    name: decodeInfo.displayName ?? current.name,
    previewSrc: decodeInfo.previewSrc ?? current.previewSrc,
    storedValue: decodeInfo.storedValue,
  } satisfies OwnedOtherDob
}

function applyOtherDobClusterMeta(
  current: OwnedOtherDob,
  clusterMeta: { clusterHash: string | null; clusterName: string | null },
) {
  return {
    ...current,
    clusterHash: clusterMeta.clusterHash,
    clusterName: clusterMeta.clusterName ?? current.clusterName,
  } satisfies OwnedOtherDob
}

export async function queryOwnedHomeSpores(options?: {
  onBescard?: (item: OwnedBescard) => void
  onBescardUpdate?: (item: OwnedBescard) => void
  onOtherDob?: (item: OwnedOtherDob) => void
  onOtherDobUpdate?: (item: OwnedOtherDob) => void
  onProgress?: (progress: BescardScanProgress) => void
}) {
  const nextBescards: OwnedBescard[] = []
  const otherDobs: OwnedOtherDob[] = []
  let bescardCount = 0
  let dobCount = 0
  let scanned = 0
  const decodePool = createTaskPool(DOB_DECODE_CONCURRENCY)

  const spores = await joyIdWallet.getSpores()

  options?.onProgress?.({ bescards: bescardCount, dobs: dobCount, scanned })

  for await (const item of spores) {
    scanned += 1

    const spore = buildOwnedSpore(item)

    if (spore) {
      dobCount += 1

      if (spore.kind === 'bescard') {
        bescardCount += 1
        nextBescards.push(spore)
        options?.onBescard?.(spore)

        decodePool.add(async () => {
          try {
            const decodeInfo = await resolveDecodeInfo(item, spore)
            const updated = applyBescardDecodeInfo(spore, decodeInfo)
            const index = nextBescards.findIndex((result) => result.id === updated.id)

            if (index >= 0) {
              nextBescards[index] = updated
            }

            options?.onBescardUpdate?.(updated)
          } catch {
            // Keep the static BesCARD data when decode fails.
          }
        })
      } else {
        otherDobs.push(spore)
        options?.onOtherDob?.(spore)

        decodePool.add(async () => {
          let updated = spore

          const [decodeInfo, clusterMeta] = await Promise.all([
            resolveDecodeInfo(item, spore).catch(() => null),
            resolveClusterMeta(spore.clusterId),
          ])

          if (decodeInfo) {
            updated = applyOtherDobDecodeInfo(updated, decodeInfo)
          }

          if (
            clusterMeta.clusterHash !== updated.clusterHash ||
            (clusterMeta.clusterName && clusterMeta.clusterName !== updated.clusterName)
          ) {
            updated = applyOtherDobClusterMeta(updated, clusterMeta)
          }

          const index = otherDobs.findIndex((result) => result.id === updated.id)

          if (index >= 0) {
            otherDobs[index] = updated
          }

          options?.onOtherDobUpdate?.(updated)
        })
      }
    }

    options?.onProgress?.({ bescards: bescardCount, dobs: dobCount, scanned })
  }

  await decodePool.onIdle()

  return {
    bescards: nextBescards,
    otherDobs,
  }
}
