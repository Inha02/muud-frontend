import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TopBarView from './TopBar'

const TopBar = ({ option }) => {
  const navigateTo = useNavigate();

  const handleClick = () => {
    switch (option) {
      case 'back':
        navigateTo(-1);
        break;
      default:
        navigateTo(-1);
        break;
    }
  };

  return <TopBarView option={option} handleClick={handleClick} />
}

export default TopBar
