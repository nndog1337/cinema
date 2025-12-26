import Pagination from '../../../../ui/Pagination/Pagination'
import SkeletonFilms from '../../../../ui/Skeleton/SkeletonFilms/SkeletonFilms'
import Films from '../sectionFilms/Films'
import styles from './style.module.css'

const FilmsWithPagination = (Props) => {
  const{
    films,
    totalPages,
    handlePageClick,
    currentPage,
    isLoadingFilms
  } = Props
  return (
    <div className={styles.filmsWrapper}>
      <h1>Top Films</h1>
      {isLoadingFilms ? <SkeletonFilms count={10} /> : <Films films={films} totalPages={totalPages} handlePageClick={handlePageClick} currentPage={currentPage} />}
      <Pagination totalPages={totalPages} handlePageClick={handlePageClick} currentPage={currentPage}/>
    </div>
  )
}

export default FilmsWithPagination
