import styles from './MobileContainer.module.css'
import MobileContent from '../MobileContent';

const MobileContainer = ({ children }) => {
    return (
        <div className={styles.mobileContainer}>
            <MobileContent>
                {children}
            </MobileContent>
        </div>
    );
};

export default MobileContainer;