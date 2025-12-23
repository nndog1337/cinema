import styles from './style.module.css'

const Nav = () => {
  return (
      <>
        <nav>
          <ul className={styles.list}>
            <li><a href='#'>Фильмы</a></li>
            <li><a href='#'>Избранное</a></li>
          </ul>
        </nav>
      </>
  )
}

export default Nav
