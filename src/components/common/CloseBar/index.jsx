import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CloseBarView from './CloseBar'

const CloseBar = ({ option }) => {
  const navigateTo = useNavigate();

  const handleClick = () => {

  };

  return <CloseBarView handleClick={handleClick} />
}

export default CloseBar
