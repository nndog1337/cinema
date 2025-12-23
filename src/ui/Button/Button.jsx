import React from 'react'
import styles from './style.module.css'

const Button = (Props) => {
  const{
    text,
    type,
    onClick
  } = Props
  return (
    <>
      <button className={styles.button} type={type} onClick={onClick}>
        {text}
      </button>
    </>
  )
}

export default Button
