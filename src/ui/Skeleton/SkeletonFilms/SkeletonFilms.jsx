import SkeletonCard from "../SkeletonCard/SkeletonCard"
import styles from './style.module.css'

const SkeletonFilms = ({count}) => {
  return (
    <div className={styles.list}>
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  )
}

export default SkeletonFilms
