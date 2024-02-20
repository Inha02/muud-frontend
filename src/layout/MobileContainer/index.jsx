import TopBar from '../../components/TopBar';
import styles from './MobileContainer.module.css'

const MobileContainer = ({ children }) => {
    return (
        <div className={styles.rootContainer}>
            <div className={styles.rootContent}>
                <TopBar option={'back'} ></TopBar>
                {children}
            </div>
        </div>

    );
};

export default MobileContainer;