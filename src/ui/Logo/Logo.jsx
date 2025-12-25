import { NavLink } from 'react-router'
import styles from './style.module.css'

const Logo = (Props) => {
  const{
    src,
    href,
    alt
  } = Props
  return (
    <>
      <NavLink to='/' end>
        <img className={styles.logo} src={src} alt={alt} />
      </NavLink>
    </>
  )
}

export default Logo
