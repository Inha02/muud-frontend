import { useEffect, useState } from 'react'
import SimpleModalView from './SImpleModal';

const SimpleModal = ({ children, onClick, closeModal }) => {
  return <SimpleModalView text={children} onClick={onClick} closeModal={closeModal} />
}

export default SimpleModal
