import styles from './MobileContainer.module.css'
import MobileContent from '../MobileContent';

const MobileContainer = ({ children }) => {
    return (
        <>
            <div className={styles.mobileContainer}>
                <MobileContent>
                    {children}
                </MobileContent>
            </div>
            <footer className='align'>
                <div className="footer-section contact">
                    <h3 className="footer-title">문의</h3>
                    <ul>
                        <li>이메일 <a href="#"><i className="fas fa-envelope"></i> mijin.npark@gmail.com </a></li>
                        <li>MUUD 깃허브 <a href="https://github.com/SWYP-3rd-muud"> Github </a></li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 TEAM-MUUD. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default MobileContainer;