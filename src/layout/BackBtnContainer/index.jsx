import TopBar from '../../components/common/TopBar';
import styles from './BackBtnContainer.module.css'
import { ModalProvider } from '../../context/ModalContext.jsx'

const BackBtnContainer = ({ children }) => {
    return (
        <div className={styles.rootContainer}>
            <div className={styles.rootContent}>
                <ModalProvider>
                    <TopBar option={'back'} ></TopBar>
                    {children}
                </ModalProvider>
            </div>
        </div>

    );
};

export default BackBtnContainer;