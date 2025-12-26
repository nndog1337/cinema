import styles from './style.module.css'

const SkeletonCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.image}></div>
      <h2 className={styles.title}></h2>
      <p className={styles.year}></p>
      <div className={styles.button}></div>
    </div>
  )
}

export default SkeletonCard
