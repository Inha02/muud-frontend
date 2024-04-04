import styles from './Modal.module.css'

const ModalView = ({ text, type, clickConfirm, clickCancle }) => {
  return (
    <div className={`${styles.modalContainer}`}>
      <div className={styles.modalBody} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalText}>
          {text}
        </div>
        <div className={styles.modalBtnArea}>
          {type === 'okCancle' &&
            <button className={styles.leftBtn + ' ' + styles.modalBtn} onClick={clickCancle}>취소</button>
          }
          <button className={styles.modalBtn} onClick={clickConfirm}>확인</button>
        </div>
      </div>
    </div>
  )
}

export default ModalView
