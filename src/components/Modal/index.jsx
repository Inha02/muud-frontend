import { useEffect, useState } from 'react'
import ModalView from './Modal';

const Modal = ({ children, handleClose }) => {
  return <ModalView text={children} handleClose={handleClose} />
}

export default Modal
