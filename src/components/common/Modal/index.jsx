import { useEffect, useState } from 'react'
import ModalView from './Modal';

const Modal = ({ children, type, handleClose, handleConfirm }) => {
  const clickConfirm = () => {
    handleConfirm();
  }

  const clickCancle = () => {
    handleClose();
  }

  return <ModalView text={children} type={type} clickCancle={clickCancle} clickConfirm={clickConfirm} />
}

export default Modal
