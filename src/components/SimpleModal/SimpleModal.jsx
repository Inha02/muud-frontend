import styles from './SimpleModal.module.css'

const SimpleModalView = ({ text, closeModal }) => {
  return (
    <div className={`${styles.modalContainer}`} onClick={closeModal}>
      <div className={styles.modalBody} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalText}>
          {text}
        </div>
      </div>
    </div>
  )
}

export default SimpleModalView
