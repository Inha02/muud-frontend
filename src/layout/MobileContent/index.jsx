import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ModalProvider } from '../../context/ModalContext.jsx'
import styles from './MobileContent.module.css'
import { setConfig } from '../../api/axios.js';
import { useCookies } from 'react-cookie';

const MobileContent = ({ children }) => {
    const { pathname } = useLocation();
    const container = document.getElementById('mobileContent');
    const [cookies, setCookie] = useCookies(['accessToken', 'refreshToken', 'id', 'nickname']);

    useEffect(() => {
        setConfig({ accessToken: cookies.accessToken });
    }, [cookies.accessToken]);

    useEffect(() => {
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