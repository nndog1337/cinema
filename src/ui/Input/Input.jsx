import styles from './style.module.css'

const Input = (Props) => {
  const{
    type,
    placeholder,
    value,
    onChange,
    ref
  } = Props
  return (
    <>
      <input className={styles.input} type={type} placeholder={placeholder} value={value} onChange={onChange} ref={ref}/>
    </>
  )
}

export default Input
