import { useState } from 'react'
import styles from './style.module.css'
import Button from '../../../ui/Button/Button'
import Nav from '../../../ui/Nav/Nav'
import Logo from '../../../ui/Logo/Logo'
import logoImage from "/public/social-share-tw.jpg"
import Input from '../../../ui/Input/Input'
import ProfileModal from './profileModal/ProfileModal'

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
        <Logo src={logoImage} alt={'Логотип сайта'} href={'#'} />
        <div className={styles.links}>
          <Nav/>
        </div>
        <Button text={'Профиль'} type={'button'} onClick={modalOpen}/>
      </div>
      {isModalOpen && <ProfileModal isModalOpen={isModalOpen} modalClose={modalClose}/>}
    </>
  )
}

export default Header
