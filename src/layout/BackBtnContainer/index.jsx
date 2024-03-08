import { Outlet, useLocation } from 'react-router-dom'
import TopBar from '../../components/common/TopBar';
import styles from './BackBtnContainer.module.css'

const getBackPath = (path) => {
    switch (path) {
        case "/home":
            return "/login"
        case "/diary/detail":
            return "/home";
        default:
            return "back"
    }
}
const BackBtnContainer = () => {
    const { pathname } = useLocation();
    return (
        <div className={styles.backBtnContainer}>
            <TopBar option={getBackPath(pathname)} ></TopBar>
            <Outlet></Outlet>
        </div>
    );
};

export default BackBtnContainer;