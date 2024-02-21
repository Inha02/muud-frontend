import styles from './SimpleModal.module.css'

const SimpleModalView = ({ text, handleClose }) => {
  return (
    <div className={`${styles.modalContainer}`} onClick={handleClose}>
      <div className={styles.modalBody} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalText}>
          {text}
        </div>
      </div>
    </div>
  )
}

export default SimpleModalView
