import Input from '../../../../ui/Input/Input'
import styles from './style.module.css'
import Button from '../../../../ui/Button/Button'

const ProfileModal = (Props) => {
  const{
    isModalOpen,
    modalClose
  } = Props

  if(!isModalOpen) return null;
  return (
    <>
      {isModalOpen && <div className={styles.backdrop} onClick={modalClose}></div>}
      <div className={`${styles.modal} ${isModalOpen ? styles.active : ''}`}>
        <h2 className={styles.title}>Профиль</h2>
        <Input type={'text'} placeholder={'Введите имя'}/>
        <Input type={'email'} placeholder={'Введите email'}/>
        <Input type={'password'} placeholder={'Введите пароль'}/>
        <Button type={'submit'} text={'Войти'} />
      </div>
    </>
  )
}

export default ProfileModal
