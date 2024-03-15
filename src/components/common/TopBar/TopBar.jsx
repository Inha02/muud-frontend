import styles from './TopBar.module.css'

const TopBarView = ({ handleClick, option }) => {
  return (
    <div className={`${styles.topBarContainer} ${styles[option]}`}>
      <div className={styles.leftBtnArea}>
        <a onClick={handleClick} className={styles.leftBtn} />
      </div>
    </div >
  )
}

export default TopBarView
