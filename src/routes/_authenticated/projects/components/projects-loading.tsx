import styles from './projects-page.module.css'

export function ProjectsLoading() {
  return (
    <div className={styles.loadingContainer}>
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className={styles.cube}>
          <div className={styles.cubeInner} />
        </div>
      ))}
    </div>
  )
}
