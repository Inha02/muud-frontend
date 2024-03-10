import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import TopBarView from './TopBar'
import { useUserContext } from '../../../context/UserContext';

const TopBar = ({ path }) => {
  const navigateTo = useNavigate();
  const { setIsAuthenticated } = useUserContext()

  const handleClick = () => {
    switch (path) {
      case '/home': //로그인으로 이동
        setIsAuthenticated(false)
        break;
      case "/diary/detail":
        return navigateTo("/home", { replace: true })
      default:
        navigateTo(-1);
        break;
    }
  };

  useEffect(() => {
  }, [])

  return <TopBarView handleClick={handleClick} />
}

export default TopBar
