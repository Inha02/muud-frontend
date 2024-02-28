import { useEffect, useState } from 'react'
import axios from 'axios';
import { Post } from '../../api/axios';
import { useUserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';


const KakaoCallback = (props) => {
    const navigateTo = useNavigate();
    const { modalOpen } = useModal();
    const { setLoginInfo } = useUserContext();

    const kakaoAxios = async (code) => {
        console.log(code)
        try {
         //const response = await axios.post(`http://ec2-3-39-74-244.ap-northeast-2.compute.amazonaws.com:8080/auth/kakao/siginin?code=${code}`)
          
          const response = await axios.post(`http://ec2-3-39-74-244.ap-northeast-2.compute.amazonaws.com:8080/auth/kakao/siginin`,{
            code:code
          });
          
          console.log('요완')

console.log(response)
/*
          const { accessToken, refreshToken, userInfo } = response;
          setLoginInfo(accessToken, refreshToken, userInfo);
          navigateTo('/home');
*/
          //201 일시 가입완료
      
        } catch (error) {
          console.log('에러')
          console.log(error.response)

/*
          modalOpen({
            content: ('요청이 실패하였습니다.'),
            link:'/login'
          })
          */
      }
      
    }

    useEffect(() => {
        const params = new URL(document.URL).searchParams;
        const code = params.get("code");
        kakaoAxios(code);
    }, []);

    return (
        <>잠시만 기다려 주세요! 로그인 중입니다.</>
    )

}

export default KakaoCallback;