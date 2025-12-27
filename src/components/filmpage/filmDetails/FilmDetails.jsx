import { useEffect, useState } from 'react';
import Button from '../../../ui/Button/Button'
import styles from './style.module.css'
import { addToLikes, isLikes, removeFromLikes } from '../../../utils/likesFilms';

const FilmDetails = ({film}) => {

  const [likes, setLikes] = useState(false);
  
  useEffect(() => {
    if (film?.imdbID) {
      setLikes(isLikes(film.imdbID));
    }
  }, [film?.imdbID]);
  
  const handleLikesClick = () => {
    if (!film?.imdbID) return;
    
    if (likes) {
        removeFromLikes(film.imdbID);
        setLikes(false);
      } else {
        addToLikes(film);
        setLikes(true);
      }
  };

  return (
      <div className={styles.details}>
        <p>Actors: {film.Actors}</p>
        <p>Awards: {film.Awards}</p>
        <p>Runtime: {film.Runtime}</p>
        <div className={styles.rating}>
          <span className={styles.ratingTitle}>Ratings:</span>
          <div>
            {film?.Ratings && film.Ratings.length > 0 ? film.Ratings.map(({Source, Value}) => {
              return <p key={Value}>{Source}, {Value}</p>
            }): <p>No ratings</p>}
          </div>
        </div>
        <Button type={'button'} text={
        likes ? 'Удалить из избранного' 
              : 'Добавить в избранное'} onClick={handleLikesClick}/>
      </div>
  )
}

export default FilmDetails
