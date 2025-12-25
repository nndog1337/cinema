import { useEffect, useState } from 'react'
import { fetchFilmDetails } from '../../../api/Api'
import styles from './style.module.css'
import FilmInfo from '../filmInfo/FilmInfo'
import FilmDetails from '../filmDetails/FilmDetails'

const Main = ({filmId}) => {
  const [film, setFilm] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const filmData = async() => {
      try{
        setIsLoading(true)
        const data = await fetchFilmDetails(filmId)
        setFilm(data)
      }catch(error){
        console.log(error.message)
        setError(error)
      }finally{
        setIsLoading(false)
      }
    }
    filmData()
  },[])

  if(isLoading){
  return <h2 style={{textAlign:'center', fontSize: '100px'}}>Loading...</h2>
  }

  if(error){
    return <h2 style={{textAlign:'center', fontSize: '100px'}}>Films not Found...</h2>
  }


  return (
  <main className={styles.main}>
    <div className={styles.wrapper}>
      <FilmInfo film={film} />
      <FilmDetails film={film} />
    </div>
  </main>
  )
}

export default Main
