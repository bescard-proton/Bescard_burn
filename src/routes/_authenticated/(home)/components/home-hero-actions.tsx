import { Button } from 'antd'

import { type BescardScanProgress } from '../helpers/owned-bescards'
import styles from './home-bescard-hub.module.css'

function getQueryButtonLabel(progress: BescardScanProgress, isQuerying: boolean) {
  if (isQuerying) {
    return `Found ${progress.dobs} DOB, including ${progress.bescards} BesCARD`
  }

  return 'Query My BesCARD'
}

export function HomeHeroActions({
  isQuerying,
  progress,
  onQuery,
  onViewProjects,
}: {
  isQuerying: boolean
  progress: BescardScanProgress
  onQuery: () => void
  onViewProjects: () => void
}) {
  return (
    <section className={styles.heroActions}>
      <div className={styles.actions}>
        <Button
          className={[styles.actionButton, styles.primaryButton].join(' ')}
          disabled={isQuerying}
          loading={isQuerying}
          shape="round"
          size="large"
          type="default"
          onClick={onQuery}
        >
          {getQueryButtonLabel(progress, isQuerying)}
        </Button>

        <Button
          className={[styles.actionButton, styles.secondaryButton].join(' ')}
          shape="round"
          size="large"
          type="default"
          onClick={onViewProjects}
        >
          View All BesCARD
        </Button>
      </div>
    </section>
  )
}
