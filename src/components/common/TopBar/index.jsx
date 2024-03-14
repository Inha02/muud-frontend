import { useNavigate } from 'react-router-dom';
import TopBarView from './TopBar'
import { useUserContext } from '../../../context/UserContext';

const TopBar = ({ path }) => {
  const navigateTo = useNavigate();
  const { setIsAuthenticated } = useUserContext()
  const option = path === '/home' ? 'logout' : 'back'

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

  return <TopBarView handleClick={handleClick} option={option} />
}

export default TopBar
