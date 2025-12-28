import { useEffect, useRef, useState } from 'react'
import Input from '../../../ui/Input/Input'
import styles from './style.module.css'
import Card from '../../../ui/Card/Card'
import { searchFilms } from '../../../api/Api'

const SearchMain = () => {
  const [filmsList, setFilmsList] = useState([])
  const [searchQueryFilm, setSearchQueryFilm] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const inputRef = useRef(null)
  
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])


  useEffect(() => {
    setError('')
    const debounce = setTimeout(async () => {
      try{
        setIsLoading(true)
        const response = await searchFilms(searchQueryFilm)
        if (response.films && response.films.length > 0) {
        setFilmsList(response.films)
      } else {
        setFilmsList([])
        if (searchQueryFilm.length >= 3) {
          setError('Films Not Found...')
        }
      }
      }catch(error){
        setError(error.message)
      }finally{
        setIsLoading(false)
      }
    },300)
    return () => clearTimeout(debounce)
  },[searchQueryFilm])

  

  return (
    <main className={styles.main}>
      <h1>Search Film</h1>
      <Input type={'text'} placeholder={'Введите название фильма'} ref={inputRef} value={searchQueryFilm} onChange={(event) => {setSearchQueryFilm(event.target.value)}} />
      {isLoading ? (
        <h1 style={{textAlign:'center'}}>Loading...</h1>
      ) : error ? (
        <h1 style={{textAlign:'center'}}>{error}</h1>
      ) : (
        <ul className={styles.list}>
          {filmsList?.map((film) => (
            <li key={film.imdbID}>
              <Card film={film}/>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}

export default SearchMain
