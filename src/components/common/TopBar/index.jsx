import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import TopBarView from './TopBar'
import { useUserContext } from '../../../context/UserContext';

const TopBar = ({ option }) => {
  const navigateTo = useNavigate();
  const { setIsAuthenticated } = useUserContext()

  const handleClick = () => {
    switch (option) {
      case 'back':
        navigateTo(-1);
        break;
      case '/login':
        setIsAuthenticated(false)
        break;
      default:
        navigateTo(option, { replace: true });
        break;
    }
  };

  useEffect(() => {
  }, [])

  return <TopBarView option={option} handleClick={handleClick} />
}

export default TopBar
