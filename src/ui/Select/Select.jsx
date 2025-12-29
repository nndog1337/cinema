import styles from './style.module.css'


const Select = (Props) => {
  const{
    sortBy,
    onChange
  } = Props
  return (
    <select className={styles.select} name="" id="rating" value={sortBy} onChange={onChange}>
      <option value="sort">Сортировка</option>
      <option value="yearNew">Год по убыванию</option>
      <option value="yearOld">Год по возврастанию</option>
    </select>
  )
}

export default Select
