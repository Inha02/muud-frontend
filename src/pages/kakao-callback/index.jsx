import { useEffect, useState } from 'react'
import axios from 'axios';


const KakaoCallback = (props) => {
    useEffect(() => {
        const href = window.location.href;
        let params = new URL(document.URL).searchParams;
        let code = params.get("code");

        const fetchData = async () => {
            await axios.get(`/auth/kakao`, { params: { code } });
        };
        fetchData();
    }, []);

    return (
        <>잠시만 기다려 주세요! 로그인 중입니다.</>
    )

}

export default KakaoCallback;