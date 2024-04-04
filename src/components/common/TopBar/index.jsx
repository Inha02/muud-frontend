import { useNavigate } from 'react-router-dom';
import TopBarView from './TopBar'
import { clearData } from '../../../utils';

const TopBar = ({ path }) => {
  const navigateTo = useNavigate();
  const option = path === '/home' ? 'logout' : 'back'

  const handleClick = () => {
    switch (path) {
      case '/home': //로그아웃
        clearData();
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
