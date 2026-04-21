import {
  dashboardClusters as rawDashboardClusters,
  type DashboardCluster,
  type DashboardItem,
} from '@/constant/BescardDashboardData'

function normalizeDashboardId(value?: string | null) {
  return value?.trim().toLowerCase() ?? ''
}

function flattenDashboardClusterItems(cluster: DashboardCluster) {
  return cluster.groups.flatMap((group) => group.items)
}

function normalizeDashboardFileId(value?: string | null) {
  return value?.trim().toLowerCase() ?? ''
}

export const bescardDashboardClusters = rawDashboardClusters

export const bescardDashboardClusterById = new Map(
  bescardDashboardClusters.map((cluster) => [normalizeDashboardId(cluster.clusterId), cluster] as const),
)

export const bescardDashboardClusterOrder = new Map(
  bescardDashboardClusters.map((cluster, index) => [normalizeDashboardId(cluster.clusterId), index] as const),
)

export const bescardDashboardItemsByClusterId = new Map(
  bescardDashboardClusters.map(
    (cluster) => [normalizeDashboardId(cluster.clusterId), flattenDashboardClusterItems(cluster)] as const,
  ),
)

export const bescardDashboardItemsByFileIdByClusterId = new Map(
  bescardDashboardClusters.map((cluster) => {
    const itemsByFileId = new Map<string, DashboardItem>()

    flattenDashboardClusterItems(cluster).forEach((item) => {
      const fileId = normalizeDashboardFileId(item.asset?.cdnId)

      if (fileId) {
        itemsByFileId.set(fileId, item)
      }
    })

    return [normalizeDashboardId(cluster.clusterId), itemsByFileId] as const
  }),
)

export function getBescardDashboardCluster(clusterId?: string | null) {
  return bescardDashboardClusterById.get(normalizeDashboardId(clusterId))
}

export function getBescardDashboardClusterItems(clusterId?: string | null): DashboardItem[] {
  return bescardDashboardItemsByClusterId.get(normalizeDashboardId(clusterId)) ?? []
}

export function getBescardDashboardItemByFileId(clusterId?: string | null, fileId?: string | null) {
  return (
    bescardDashboardItemsByFileIdByClusterId
      .get(normalizeDashboardId(clusterId))
      ?.get(normalizeDashboardFileId(fileId)) ?? null
  )
}

export function getBescardDashboardClusterOrderIndex(clusterId?: string | null) {
  return bescardDashboardClusterOrder.get(normalizeDashboardId(clusterId)) ?? Number.MAX_SAFE_INTEGER
}
