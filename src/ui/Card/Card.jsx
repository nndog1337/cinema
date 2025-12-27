import { Link } from 'react-router'
import Button from '../Button/Button'
import styles from './style.module.css'
import { fetchFilmDetails } from '../../api/Api'
import { addToLikes, isLikes, removeFromLikes } from '../../utils/likesFilms'
import { useEffect, useState } from 'react'

const Card = (Props) => {
  const {
    film,
    isLoading,
    isInLikes = false,
    onRemove
  } = Props

  const [likes, setLikes] = useState(false);

  useEffect(() => {
    if (film?.imdbID) {
      setLikes(isLikes(film.imdbID));
    }
  }, [film?.imdbID]);

  const isFilmLiked = film?.imdbID ? isLikes(film.imdbID) : false;

  if (!film || !film.imdbID) {
    return null; 
  }

  const handleLikesClick = () => {
    if (isFilmLiked) {
      removeFromLikes(film.imdbID);
      setLikes(false)
      if(isInLikes && onRemove){
        onRemove(film.imdbID)
      }
    } else {
      addToLikes(film);
      setLikes(true);
    }
  };

  if(isLoading){
    return <SkeletonFilms/>
  }
  return (
    <div className={styles.card}>
      <Link to={`/film/${film.imdbID}`}>
        <img className={styles.image} src={film.Poster} alt={film.Title} onClick={() => fetchFilmDetails(film.imdbID)} />
        <h2 className={styles.title} onClick={() => fetchFilmDetails(film.imdbID)} >{film.Title}</h2>
      </Link>
      <p className={styles.year}>{film.Year}</p>
      <Button text={isInLikes ? 'Удалить из избранного' 
        : likes ? 'В избранном' 
                : 'Добавить в избранное'} type={'button'} onClick={handleLikesClick}/>
    </div>
  )
}

export default Card
