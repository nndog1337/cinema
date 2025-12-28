import { useEffect, useRef, useState } from 'react'
import styles from './style.module.css'
import { fetchFilms } from '../../../api/Api'
import Skeleton from '../../../ui/Skeleton/Skeleton'
import FilmsWithPagination from './filmsWithPagination/FilmsWithPagination'
import SliderWithSkeleton from './sliderWithSkeleton/SliderWithSkeleton'
import { getRandomNumber } from '../../../utils/getRandomNumber'

const Main = () => {
  const [films, setFilms] = useState([])
  const [randomFilms, setRandomFilms] = useState([])
  const [isLoadingSlider, setIsLoadingSlider] = useState(false)
  const [isLoadingFilms, setIsLoadingFilms] = useState(false)
  const [error, setError] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  
  const totalPages = 10

  const randomPageRef = useRef(getRandomNumber())

  useEffect(() => {
    const filmsData = async() => {
      try{
        setIsLoadingSlider(true)
        const randomData = await fetchFilms(randomPageRef.current)
        setRandomFilms(randomData || [])
      }catch(error){
        console.log(error.message)
        setError(error)
      }finally{
        setIsLoadingSlider(false)
      }
    }
    filmsData()
  },[])

  useEffect(() => {
    const filmsData = async() => {
      try{
        setIsLoadingFilms(true)
        const data = await fetchFilms(currentPage)
        setFilms(data || [])
      }catch(error){
        console.log(error.message)
        setError(error)
      }finally{
        setIsLoadingFilms(false)
      }
    }
    filmsData()
  },[currentPage])

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  if(isLoadingSlider && !films.length) {
    return <Skeleton 
      totalPages={totalPages} 
      handlePageClick={handlePageClick} 
      currentPage={currentPage}
    />
  }

  if(error){
    return <h2 style={{textAlign:'center', fontSize: '100px'}}>Фильмы не найдены...</h2>
  }

  return (
    <main className={styles.main}>
      <SliderWithSkeleton
        isLoadingSlider={isLoadingSlider}
        randomFilms={randomFilms} 
      />
      <FilmsWithPagination 
        films={films} 
        totalPages={totalPages} 
        handlePageClick={handlePageClick} 
        currentPage={currentPage}
        isLoadingFilms={isLoadingFilms}
      />
    </main>
  )
}

export default Main
