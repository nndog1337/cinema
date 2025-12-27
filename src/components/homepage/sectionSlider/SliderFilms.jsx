import { useState } from 'react'
import styles from './style.module.css'
import Card from '../../../ui/Card/Card'


const SliderFilms = ({randomFilms}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex(prev => prev === randomFilms.length - 1 ? 0 : prev + 1 )
  }
  const prevSlide = () => {
    setCurrentIndex(prev => prev === 0 ? randomFilms.length - 1 : prev - 1 )
  }

  if(!randomFilms || randomFilms.length === 0){
    return null
  }

  

  return (
    <div className={styles.slider}>
      <h2>Recomendation</h2>
      <button className={styles.button} onClick={prevSlide}>⇧</button>
      <Card key={randomFilms[currentIndex].imdbID}
      film={randomFilms[currentIndex]} 
      />
      <button className={styles.button} onClick={nextSlide}>⇩</button>
    </div>
  )
}

export default SliderFilms
