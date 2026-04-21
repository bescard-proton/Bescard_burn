import '@/components/mintpad-dashboard-globals.css'

import { useMemo } from 'react'
import { useInfiniteScroll } from 'ahooks'

import { bescardDashboardClusters } from '@/constant/BescardDashboard'
import { type DashboardCluster } from '@/constant/BescardDashboardData'
import { MintpadDashboardListItem } from '@/components/mintpad-dashboard-list-item'

import { ProjectsLoadMoreTrigger } from './components/projects-load-more-trigger'
import { ProjectsLoading } from './components/projects-loading'
import { ProjectsPageHeader } from './components/projects-page-header'
import styles from './components/projects-page.module.css'

const PAGE_SIZE = 5

type PageData = {
  list: DashboardCluster[]
  nextPage?: number
}

export function ProjectsPage() {
  const { data: dataSource, loading, loadingMore, loadMore, noMore } = useInfiniteScroll<PageData>(
    async (prevData) => {
      const { nextPage = 1 } = prevData || {}
      const pageStart = (nextPage - 1) * PAGE_SIZE
      const pageEnd = pageStart + PAGE_SIZE

      return {
        list: bescardDashboardClusters.slice(pageStart, pageEnd),
        nextPage: pageEnd >= bescardDashboardClusters.length ? undefined : nextPage + 1,
      }
    },
    {
      isNoMore: (data) => data?.nextPage === undefined,
    },
  )

  const items = useMemo(() => dataSource?.list || [], [dataSource?.list])

  return (
    <div className={styles.page}>
      <div className={styles.contentContainer}>
        <ProjectsPageHeader />

        {loading ? (
          <div className={[styles.loading, styles.mainLoading].join(' ')}>
            <ProjectsLoading />
          </div>
        ) : null}

        {!loading ? items.map((item) => <MintpadDashboardListItem key={item.dobId} item={item} />) : null}

        {loadingMore ? (
          <div className={styles.loading}>
            <ProjectsLoading />
          </div>
        ) : null}

        {!loading && !noMore ? <ProjectsLoadMoreTrigger onLoadMore={loadMore} /> : null}
      </div>
    </div>
  )
}
