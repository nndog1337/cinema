import SkeletonCard from '../SkeletonCard/SkeletonCard'
import styles from './style.module.css'

const SkeletonSlider = () => {
  return (
    <div className={styles.slider}>
      <h2>Recomendation</h2>
      <div className={styles.button}></div>
      <SkeletonCard/>
      <div className={styles.button}></div>
    </div>
  )
}

export default SkeletonSlider
