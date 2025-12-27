import { useEffect, useState } from 'react'
import Card from '../../../ui/Card/Card'
import { getLikes } from '../../../utils/likesFilms'
import styles from './style.module.css'

const LikesMain = () => {
  const [filmLike, setFilmLike] = useState([])


  useEffect(() => {
    const savedLikes = getLikes()
    setFilmLike(savedLikes)
  },[])

  const handleRemove = (filmId) => {
    setFilmLike(prev => prev.filter(film => film.imdbID !== filmId));
  }

  return (
    <main className={styles.main}>
      {filmLike.length === 0 ?
      <h1>Нет избранных фильмов</h1>
      : 
      <div className={styles.section}>
        <h1>On Future</h1>
        <div className={styles.likesFilms}>
          {filmLike.map((film) => (
          <Card key={film.imdbID} film={film} isInLikes={true} onRemove={handleRemove} />))}
        </div>
      </div>
      }
    </main>
  )
}

export default LikesMain
