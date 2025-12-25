import { Link } from 'react-router'
import Button from '../Button/Button'
import styles from './style.module.css'
import { fetchFilmDetails } from '../../api/Api'

const Card = (Props) => {
  const {
    film
  } = Props

  if (!film || !film.imdbID) {
    return null; 
  }
  return (
    <div className={styles.card}>
      <Link to={`/film/${film.imdbID}`}>
        <img className={styles.image} src={film.Poster} alt={film.Title} onClick={() => fetchFilmDetails(film.imdbID)} />
        <h2 className={styles.title} onClick={() => fetchFilmDetails(film.imdbID)} >{film.Title}</h2>
      </Link>
      <p className={styles.year}>{film.Year}</p>
      <Button text={'Добавить в избранное'} type={'button'}/>
    </div>
  )
}

export default Card
