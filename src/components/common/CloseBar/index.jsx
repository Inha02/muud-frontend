import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CloseBarView from './CloseBar'

const CloseBar = ({ onClick }) => {
  const navigateTo = useNavigate();

  return <CloseBarView handleClick={onClick} />
}

export default CloseBar
