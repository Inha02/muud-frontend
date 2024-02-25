import styles from './DoubleButton.module.css'

const DoubleButtonView = ({
  leftTxt,
  rightTxt,
  leftActive,
  rightActive,
  handleLeftClick,
  handleRightClick,
  leftStyle,
  rightStyle
}) => {
  return (
    <div className={styles.btnContainer}>
      <button
        style={leftStyle}
        className={leftActive ? styles.roundBtn + ' ' + styles.active : styles.roundBtn + ' ' + styles.inactive}
        onClick={leftActive ? handleLeftClick : null}
      >{leftTxt}</button>
      <button
        style={rightStyle}
        className={rightActive ? styles.roundBtn + ' ' + styles.active : styles.roundBtn + ' ' + styles.inactive}
        onClick={rightActive ? handleRightClick : null}
      >{rightTxt}</button>
    </div >
  )
}

export default DoubleButtonView
