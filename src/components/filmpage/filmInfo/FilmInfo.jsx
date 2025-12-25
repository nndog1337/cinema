import styles from './style.module.css'

const FilmInfo = ({film}) => {
  return (
    <div className={styles.mainInfo}>
      <div className={styles.image}>
        <img src={film.Poster} alt="" />
      </div>
      <h1>{film.Title}</h1>
      <p>{film.Year}</p>
    </div>
  )
}

export default FilmInfo
