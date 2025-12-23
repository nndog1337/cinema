import styles from './style.module.css'

const Logo = (Props) => {
  const{
    src,
    href,
    alt
  } = Props
  return (
    <>
      <a href={href}>
        <img className={styles.logo} src={src} alt={alt} />
      </a>
    </>
  )
}

export default Logo
