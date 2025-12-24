import React, {memo} from 'react'
import styles from './style.module.css'

const Button = (Props) => {
  const{
    text,
    type,
    onClick,
    isActive
  } = Props
  return (
    <>
      <button className={`${styles.button} ${isActive ? styles.active : ''}`} type={type} onClick={onClick}>
        {text}
      </button>
    </>
  )
}

export default Button
