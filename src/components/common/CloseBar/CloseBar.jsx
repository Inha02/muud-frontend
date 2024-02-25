import styles from './CloseBar.module.css'

const CloseBarView = ({ handleClick }) => {

  return (
    <div className={`${styles.topBarContainer}`}>
      <div className={styles.leftBtnArea}>
        <a onClick={handleClick} className={styles.leftBtn + ' ' + styles.x} />
      </div>
    </div >
  )
}

export default CloseBarView
