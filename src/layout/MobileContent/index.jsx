import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ModalProvider } from '../../context/ModalContext.jsx'
import styles from './MobileContent.module.css'
import { be } from '../../api/axios.js'; // Axios 모듈 가져오기

const MobileContent = ({ children }) => {
    const { pathname } = useLocation();
    const container = document.getElementById('mobileContent');
    useEffect(() => {
        console.log('Current Headers:', be.defaults.headers);
        if (container) {
            container.scrollTo(0, 0); // 컨테이너의 스크롤 위치를 최상단으로 설정합니다.
        }
    }, [pathname]);

    return (
        <div id='mobileContent' className={styles.rootContent}>
            <ModalProvider>
                {children}
            </ModalProvider>
        </div>
    );
};

export default MobileContent;