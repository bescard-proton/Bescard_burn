import { type ReactNode } from 'react'

import styles from './home-bescard-hub.module.css'

export function HomeResultsPanel({
  children,
  queryError,
}: {
  children: ReactNode
  queryError: string | null
}) {
  return (
    <section className={styles.resultsPanel}>
      {queryError ? <p className={styles.error}>{queryError}</p> : null}

      {children}
    </section>
  )
}
