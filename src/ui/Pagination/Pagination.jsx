import Button from '../Button/Button'
import styles from './style.module.css'

const Pagination = (Props) => {
  const{
    totalPages,
    handlePageClick,
    currentPage
  } = Props
  return (
    <div className={styles.pagination}>
      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index+1
        const isActive = pageNumber === currentPage
        return <Button key={index} type={'button'} text={pageNumber} onClick={() => handlePageClick(pageNumber)} isActive={isActive}/>
      })}
    </div>
  )
}

export default Pagination
