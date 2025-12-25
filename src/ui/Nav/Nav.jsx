import styles from './style.module.css'
import { NavLink } from "react-router";

const Nav = () => {
  return (
      <>
        <nav className={styles.list}>
          <NavLink to='/' end>
            Фильмы
          </NavLink>

          <NavLink to='/likes' end>
            Избранное
          </NavLink>
        </nav>
      </>
  )
}

export default Nav
