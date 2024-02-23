import styles from './RoundButton.module.css'

const RoundButtonView = ({ text, onClick, active }) => {
  return (
    <div className={styles.btnContainer}>
      <button
        className={active ? styles.roundBtn + ' ' + styles.active : styles.roundBtn + ' ' + styles.inactive}
        onClick={active ? onClick : null}
      >{text}</button>
    </div >
  )
}

export default RoundButtonView
