import { NavLink } from 'react-router'
import styles from './style.module.css'
import { useContext } from 'react'
import { ThemeContext } from '../../Provider/ThemeProvider'

const Logo = () => {
  const [theme] = useContext(ThemeContext)
  return (
    <>
      <NavLink to='/' end>
        <img className={styles.logo} src={theme==='dark' ? "public/2153523-e0e0e0.svg" : "public/2153523-0d1117.svg"} alt={'Логотип'} />
      </NavLink>
    </>
  )
}

export default Logo
