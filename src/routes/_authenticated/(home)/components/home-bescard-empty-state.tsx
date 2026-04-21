import { Empty } from 'antd'

import { publicAsset } from '@/constant/APP'

import styles from './home-bescard-empty-state.module.css'

export function HomeBescardEmptyState({ message }: { message: string }) {
  return (
    <div className={styles.panel}>
      <Empty
        className={styles.empty}
        description={<p className={styles.description}>{message}</p>}
        image={<img alt="No DOB found" className={styles.image} src={publicAsset('assets/common/list.no-data.png')} />}
      />
    </div>
  )
}
