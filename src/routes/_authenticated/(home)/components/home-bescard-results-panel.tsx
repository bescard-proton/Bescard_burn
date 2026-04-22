import { useMemo } from 'react'

import { getBescardDashboardClusterOrderIndex } from '@/constant/BescardDashboard'
import { type DashboardCluster } from '@/constant/BescardDashboardData'
import { MintpadDashboardListItem } from '@/components/mintpad-dashboard-list-item'

import type { OwnedBescard } from '../helpers/owned-bescards'
import { HomeBescardEmptyState } from './home-bescard-empty-state'
import styles from './home-bescard-hub.module.css'

type BescardGroup = {
  cluster: DashboardCluster
  items: OwnedBescard[]
  key: string
}

function buildBescardGroups(items: OwnedBescard[]) {
  const groups = new Map<string, BescardGroup>()

  items.forEach((item) => {
    const key = item.dashboardCluster.clusterId.toLowerCase()
    const currentGroup = groups.get(key)

    if (currentGroup) {
      currentGroup.items.push(item)
      return
    }

    groups.set(key, {
      cluster: item.dashboardCluster,
      items: [item],
      key,
    })
  })

  return Array.from(groups.values()).sort(
    (left, right) =>
      getBescardDashboardClusterOrderIndex(left.key) - getBescardDashboardClusterOrderIndex(right.key),
  )
}

export function HomeBescardResultsPanel({
  count,
  emptyStateMessage,
  items,
  onMelt,
}: {
  count?: number | null
  emptyStateMessage: string
  items: OwnedBescard[]
  onMelt: (item: OwnedBescard) => void
}) {
  const groups = useMemo(() => buildBescardGroups(items), [items])
  const title = count == null ? 'My BesCARD' : `My BesCARD (${count})`

  return (
    <section className={styles.sectionBlock}>
      <div className={styles.sectionHeader}>
        <h1 className={styles.sectionTitle}>{title}</h1>
      </div>

      {groups.length > 0 ? (
        <div className={styles.projectCardList}>
          {groups.map((group) => (
            <article key={group.key} className={styles.projectCard}>
              <MintpadDashboardListItem
                item={group.cluster}
                mode="redeem"
                ownedDobs={group.items.map((item) => ({
                  actionKey: item.id,
                  key: item.id,
                  name: item.name,
                  previewSrc: item.previewSrc ?? '',
                  rarity: item.rareType,
                }))}
                onDobAction={(itemKey) => {
                  const selectedItem = group.items.find((item) => item.id === itemKey)

                  if (!selectedItem) {
                    return
                  }

                  onMelt(selectedItem)
                }}
              />
            </article>
          ))}
        </div>
      ) : (
        <HomeBescardEmptyState message={emptyStateMessage} />
      )}
    </section>
  )
}
