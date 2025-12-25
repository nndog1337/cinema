import Card from '../../../../ui/Card/Card'
import Pagination from '../../../../ui/Pagination/Pagination'
import styles from './style.module.css'

const Films = (Props) => {
  const{
    films,
    totalPages,
    handlePageClick,
    currentPage
  } = Props

  return (
  <section className={styles.section}>
    <h1>Top Films</h1>
    <div className={styles.list}>
      {films.map(film => <Card key={film.imdbID} film={film}/>)}
    </div>
    <Pagination totalPages={totalPages} handlePageClick={handlePageClick} currentPage={currentPage}/>
  </section>
  )
}

export default Films
