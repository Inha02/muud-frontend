import { Outlet } from 'react-router-dom'
import TopBar from '../../components/common/TopBar';
import styles from './BackBtnContainer.module.css'

const BackBtnContainer = () => {
    return (
        <div className={styles.backBtnContainer}>
            <TopBar option={'back'} ></TopBar>
            <Outlet></Outlet>
        </div>
    );
};

export default BackBtnContainer;