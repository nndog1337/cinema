import { useMemo, useState } from 'react'
import Pagination from '../../../../ui/Pagination/Pagination'
import Select from '../../../../ui/Select/Select'
import SkeletonFilms from '../../../../ui/Skeleton/SkeletonFilms/SkeletonFilms'
import Films from '../sectionFilms/Films'
import styles from './style.module.css'

const FilmsWithPagination = (Props) => {
  const{
    films,
    totalPages,
    handlePageClick,
    currentPage,
    isLoadingFilms,
  } = Props

  const [sortBy, setSortBy] = useState('')

  const sortedFilms = useMemo(() => {
    if (!sortBy) return films
  
    const filmsCopy = [...films]
    if(sortBy === 'yearNew'){
      filmsCopy.sort((a, b) => {
        const yearA = parseFloat(a.Year) || 0
        const yearB = parseFloat(b.Year) || 0
        return yearB - yearA })
    }else if(sortBy === 'yearOld'){
      filmsCopy.sort((a, b) => {
        const yearA = parseFloat(a.Year) || 0
        const yearB = parseFloat(b.Year) || 0
        return yearA - yearB })
    }
      return filmsCopy
    },[films, sortBy])


  return (
    <div className={styles.filmsWrapper}>
      <h1>Top Films</h1>
      <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}/>
      {isLoadingFilms ? <SkeletonFilms count={10} /> : <Films films={sortedFilms} totalPages={totalPages} handlePageClick={handlePageClick} currentPage={currentPage} />}
      <Pagination totalPages={totalPages} handlePageClick={handlePageClick} currentPage={currentPage}/>
    </div>
  )
}

export default FilmsWithPagination
