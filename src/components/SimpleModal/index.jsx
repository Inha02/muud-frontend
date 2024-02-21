import { useEffect, useState } from 'react'
import SimpleModalView from './SImpleModal';

const SimpleModal = ({ children, handleClose }) => {
  return <SimpleModalView text={children} handleClose={handleClose} />
}

export default SimpleModal
