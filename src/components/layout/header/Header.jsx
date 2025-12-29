import { useState } from 'react'
import styles from './style.module.css'
import Button from '../../../ui/Button/Button'
import Nav from '../../../ui/Nav/Nav'
import Logo from '../../../ui/Logo/Logo'
import ProfileModal from './profileModal/ProfileModal'
import Theme from '../../../ui/Theme/Theme'

const Header = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const modalOpen = () =>{
    setIsModalOpen(true)
  }
  const modalClose = () =>{
    setIsModalOpen(false)
  }

  return (
    <>
      <div className={styles.header}>
        <Logo/>
        <div className={styles.links}>
          <Nav/>
        </div>
        <div className={styles.buttonsWrapper}>
          <Theme/>
          <Button text={'Профиль'} type={'button'} onClick={modalOpen}/>
        </div>
      </div>
      {isModalOpen && <ProfileModal isModalOpen={isModalOpen} modalClose={modalClose}/>}
    </>
  )
}

export default Header
