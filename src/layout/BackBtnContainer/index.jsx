import { Outlet, useLocation } from 'react-router-dom'
import TopBar from '../../components/common/TopBar';
import styles from './BackBtnContainer.module.css'

const BackBtnContainer = () => {
    const { pathname } = useLocation();
    return (
        <div className={styles.backBtnContainer}>
            <TopBar path={pathname} ></TopBar>
            <Outlet></Outlet>
        </div>
    );
};

export default BackBtnContainer;