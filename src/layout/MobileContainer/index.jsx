import TopBar from '../../components/TopBar';
import styles from './MobileContainer.module.css'

const MobileContainer = ({ children }) => {
    return (
        <div className={styles.rootContainer}>
            <div className={styles.rootContent}>
                <TopBar></TopBar>
                {children}
            </div>
        </div>

    );
};

export default MobileContainer;