import { WalletConnector } from '@/components/wallet-connector'

import styles from './home-bescard-hub.module.css'

export function HomePageHeader() {
  return (
    <header className={styles.header}>
      <WalletConnector />
    </header>
  )
}
