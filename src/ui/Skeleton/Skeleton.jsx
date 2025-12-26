import Pagination from '../Pagination/Pagination'
import SkeletonFilms from './SkeletonFilms/SkeletonFilms'
import SkeletonSlider from './SkeletonSlider/SkeletonSlider'
import styles from './style.module.css'

const Skeleton = (Props) => {
  const{
    totalPages,
    handlePageClick,
    currentPage,
  } = Props
  return (
    <main className={styles.main}>
      <div className={styles.recomedationWrapper}>
        <div className={styles.sliderWrapper}>
        <SkeletonSlider/>
        </div>
      </div>
      <div className={styles.filmsWrapper}>
        <h1 style={{textAlign:'center'}}>Top Films</h1>
        <SkeletonFilms count={10}/>
        <Pagination
          totalPages={totalPages} 
          handlePageClick={handlePageClick} 
          currentPage={currentPage}
        />
      </div>
    </main>
  )
}

export default Skeleton
