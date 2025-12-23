import styles from './style.module.css'

const Input = (Props) => {
  const{
    type,
    placeholder,
  } = Props
  return (
    <>
      <input className={styles.input} type={type} placeholder={placeholder}/>
    </>
  )
}

export default Input
