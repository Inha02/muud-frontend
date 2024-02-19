import styles from './TopBar.module.css'

const TopBarView = () => {
  return (
    <div className={styles.mg}>
      <div className={styles.topBarContainer}>
        <div className={styles.leftBtnArea}>
          <a href="#" className={styles.leftBtn} />
        </div>
      </div >
    </div>
  )
}

export default TopBarView
