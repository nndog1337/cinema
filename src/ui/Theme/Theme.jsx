import React, { useContext } from 'react'
import { ThemeContext } from '../../Provider/ThemeProvider'

const Theme = () => {
  const [theme, setTheme] = useContext(ThemeContext)
  const toggleTheme = () => {
    setTheme((prev) => prev === 'dark' ? 'light' : 'dark')
  }
  return (
    <div>
      <img src={theme==='dark' ? "public/2023236-e0e0e0.svg" : "public/2023236-0d1117.svg"} style={{width:'34px', height: '34px'}} alt=""  onClick={toggleTheme}/>
    </div>
  )
}

export default Theme
