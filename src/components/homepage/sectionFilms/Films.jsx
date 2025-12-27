import Card from '../../../ui/Card/Card'
import styles from './style.module.css'

const Films = (Props) => {
  const{
    films,
  } = Props

  return (
  <section >
    <div className={styles.list}>
      {films.map(film => <Card key={film.imdbID} film={film}/>)}
    </div>
  </section>
  )
}

export default Films




