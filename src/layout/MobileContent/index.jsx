import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ModalProvider } from '../../context/ModalContext.jsx'
import styles from './MobileContent.module.css'
import { clearConfig, setConfig } from '../../api/axios.js';
import { useCookies } from 'react-cookie';
import axios from 'axios'


const MobileContent = ({ children }) => {
    const { pathname } = useLocation();
    const container = document.getElementById('mobileContent');
    const [cookies, setCookie] = useCookies(['accessToken', 'refreshToken', 'id', 'nickname']);
    /*
        const refreshToken = async () => {
            try {
                const be = axios.create({
                    baseURL: import.meta.env.VITE_BACKEND_URL,
                    withCredentials: true,
                });
                be.defaults.withCredentials = true;
                const newToken = await be.post('/auth/refresh', { refreshToken: cookies.refreshToken })
                console.log('새토큰' + newToken)
            } catch (error) {
                console.error('로그인 토큰 갱신에 실패했습니다:', error);
                throw error
    
            }
        }
        */
    useEffect(() => {
        if (!cookies.accessToken) {
            //clearConfig('Authorization')
        }
    }, [cookies.accessToken]);

    useEffect(() => {
        if (container) {
            container.scrollTo(0, 0); // 컨테이너의 스크롤 위치를 최상단으로 설정합니다.
        }
        //  if (cookies.refreshToken) refreshToken();

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