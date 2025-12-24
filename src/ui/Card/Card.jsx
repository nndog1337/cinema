import Button from '../Button/Button'
import styles from './style.module.css'

const Card = (Props) => {
  const {
    imgSrc,
    title,
    year
  } = Props
  return (
    <div className={styles.card}>
      <a href='#'><img className={styles.image} src={imgSrc} alt={title} /></a>
      <a href='#'><h2 className={styles.title}>{title}</h2></a>
      <p className={styles.year}>{year}</p>
      <Button text={'Добавить в избранное'} type={'button'}/>
    </div>
  )
}

export default Card
