import { useEffect, useState } from 'react'
import ModalView from './Modal';

const Modal = ({ children, handleClose }) => {
  const handleConfirm= ()=>{
    handleClose();
  }

  return <ModalView text={children} handleClose={handleConfirm} />
}

export default Modal
