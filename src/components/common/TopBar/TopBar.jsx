import styles from './TopBar.module.css'

const TopBarView = ({ option, handleClick }) => {

  return (
    <div className={`${styles.topBarContainer} ${styles['back']}`}>
      <div className={styles.leftBtnArea}>
        <a onClick={handleClick} className={styles.leftBtn} />
      </div>
    </div >
  )
}

export default TopBarView
