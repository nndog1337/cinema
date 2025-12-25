import Button from '../../../ui/Button/Button'
import styles from './style.module.css'

const FilmDetails = ({film}) => {
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
        <Button type={'button'} text={'Добавить в избранное'}/>
      </div>
  )
}

export default FilmDetails
