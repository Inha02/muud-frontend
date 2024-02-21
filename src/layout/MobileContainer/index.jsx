import TopBar from '../../components/common/TopBar';
import styles from './MobileContainer.module.css'
import { ModalProvider } from '../../context/ModalContext.jsx'

const MobileContainer = ({ children }) => {
    return (
        <div className={styles.rootContainer}>
            <div className={styles.rootContent}>
                <ModalProvider>
                    {children}
                </ModalProvider>
            </div>
        </div>

    );
};

export default MobileContainer;