import {createContext, useState, useEffect} from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export const ThemeContext = createContext()

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark')
  useEffect(() => {
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(theme);
  },[theme])
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
