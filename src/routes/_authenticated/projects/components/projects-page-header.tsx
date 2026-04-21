import { Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

import { WalletConnector } from '@/components/wallet-connector'

import styles from './projects-page.module.css'

export function ProjectsPageHeader() {
  return (
    <header className={styles.pageHeader}>
      <Link to="/" className={styles.routeButton} aria-label="Back to My BesCARD">
        <ArrowLeft className={styles.routeButtonIcon} aria-hidden="true" strokeWidth={3} />
        <span className={styles.routeButtonLabel}>Back to My BesCARD</span>
      </Link>

      <WalletConnector />
    </header>
  )
}
