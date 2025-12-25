import { useEffect, useRef, useState } from 'react'
import Films from './sectionFilms/Films'
import styles from './style.module.css'
import SliderFilms from './sectionSlider/SliderFilms'
import { fetchFilms } from '../../../api/Api'
import { getRandomNumber } from '../../../utils/random'

const Main = () => {
  const [films, setFilms] = useState([])
  const [randomFilms, setRandomFilms] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10

  const randomPageRef = useRef(getRandomNumber())


  useEffect(() => {
    const filmsData = async() => {
      try{
        setIsLoading(true)
        const data = await fetchFilms(1)
        const randomData = await fetchFilms(randomPageRef.current)
        setRandomFilms(randomData || [])
        setFilms(data || [])
      }catch(error){
        console.log(error.message)
        setError(error)
      }finally{
        setIsLoading(false)
      }
    }
    filmsData()
  },[])

  useEffect(() => {
    const filmsData = async() => {
      try{
        setIsLoading(true)
        const data = await fetchFilms(currentPage)
        setFilms(data || [])
      }catch(error){
        console.log(error.message)
        setError(error)
      }finally{
        setIsLoading(false)
      }
    }
    filmsData()
  },[currentPage])

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  

if(isLoading){
  return <h2 style={{textAlign:'center', fontSize: '100px'}}>Loading...</h2>
}

if(error){
  return <h2 style={{textAlign:'center', fontSize: '100px'}}>Films not Found...</h2>
}

  return (
    <main className={styles.main}>
      <div className={styles.sliderWrapper}><SliderFilms randomFilms={randomFilms}/></div>
      <Films films={films} isLoading={isLoading} error={error} totalPages={totalPages} handlePageClick={handlePageClick} currentPage={currentPage} />
    </main>
  )
}

export default Main
