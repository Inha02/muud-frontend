import styles from './RoundButton.module.css'

const RoundButtonView = ({ text, option, onClick }) => {
  return (
    <div className={`${styles.btnContainer}`}>
      <button onClick={onClick} className={styles.roundBtn}>{text}</button>
    </div >
  )
}

export default RoundButtonView
