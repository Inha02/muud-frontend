import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TopBarView from './TopBar'

const TopBar = ({ option }) => {
  const navigateTo = useNavigate();

  const handleClick = () => {
    switch (option) {
      case 'x':
        break;
      case 'back':
        navigateTo(-1);
        break;
      default:
    }
  };

  return <TopBarView option={option} handleClick={handleClick} />
}

export default TopBar
