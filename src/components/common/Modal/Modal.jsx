import styles from './Modal.module.css'

const ModalView = ({ text, handleClose }) => {
  return (
    <div className={`${styles.modalContainer}`}>
      <div className={styles.modalBody} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalText}>
          {text}
        </div>
        <button className={styles.modalOneBtn} onClick={handleClose}>확인</button>
      </div>
    </div>
  )
}

export default ModalView
