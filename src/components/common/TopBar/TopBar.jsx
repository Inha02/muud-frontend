import styles from './TopBar.module.css'

const TopBarView = ({ option, handleClick }) => {

  return (
    <div className={styles.mg}>
      <div className={`${styles.topBarContainer} ${styles[option]}`}>
        <div className={styles.leftBtnArea}>
          <a onClick={handleClick} className={styles.leftBtn} />
        </div>
      </div >
    </div>
  )
}

export default TopBarView
