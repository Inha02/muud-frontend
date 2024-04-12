import ReactGA from "react-ga4";
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { Post, setConfig } from '../../api/axios';
import { useUserContext } from '../../context/UserContext';
import { useModal } from '../../context/ModalContext';
import moment from 'moment';

const KakaoCallback = () => {
  const { setIsAuthenticated } = useUserContext()
  const navigateTo = useNavigate();
  const { modalOpen } = useModal();
  const [cookies, setCookie] = useCookies(['accessToken', 'refreshToken', 'id', 'nickname']);
  const params = new URL(document.URL).searchParams;
  const [code, setCode] = useState('');

  const kakaoAxios = async (code) => {
    try {
      const response = await Post('/auth/kakao/signin', {
        code: code
      });
      const { accessToken, refreshToken, userInfo } = response.data;
      setCookie('accessToken', accessToken, { path: '/' });
      setCookie('refreshToken', refreshToken, { path: '/' });
      setCookie('id', userInfo.id, { path: '/' });
      setCookie('nickname', userInfo.nickname, { path: '/' });
      setCookie('expiresAt', moment().add(15, "minutes").format("yyyy-MM-DD HH:mm:ss"), { path: '/' });

      setConfig({ accessToken: accessToken });
      setIsAuthenticated(true)
      if (response.status == 201) {
        ReactGA.event({ category: 'User', action: 'user_to_register' });
        modalOpen({
          content: ('환영합니다!\n회원 가입 완료'),
          handle: navigateTo('/user/nickname', { replace: true }),
        })
      } else {
        ReactGA.event({ category: 'User', action: 'user_login' });
        navigateTo('/home', { replace: true });
      }

    } catch (error) {
      console.log(error)
      modalOpen({
        content: ('요청이 실패하였습니다.'),
        handle: navigateTo('/login', { replace: true })
      })
    }

  }

  const getCode = () => {
    setCode(params.get('code'))
  }
  useEffect(() => {
    if (code) kakaoAxios(code);
  }, [code]);

  useEffect(() => {
    getCode()
  }, []);

  return (
    <>잠시만 기다려 주세요! 로그인 중입니다.</>
  )

}

export default KakaoCallback;