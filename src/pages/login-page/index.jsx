import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginPageView from './login-page';
import { useModal } from '../../context/ModalContext';
import { useUserContext } from '../../context/UserContext';
import { validateEmail, validatePswd } from '../../utils';
import { Post } from '../../api/axios';

const LoginPage = () => {
  const navigateTo = useNavigate();
  const [user, setUser] = useState({
    id: '',
    pswd: '',
  })
  const [isShownPswd, setIsShownPswd] = useState(false);
  const [isLoginActive, setIsLoginActive] = useState(false);
  const { modalOpen } = useModal();
  const { setLoginInfo } = useUserContext();

  const REST_API_KEY = import.meta.env.VITE_KAKAO_KEY;
  const REDIRECT_URI = `${import.meta.env.VITE_HOST}/oauth2/callback/kakao`;
  // oauth 요청 URL
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  const onChangeUser = (event) => {
    const { name, value } = event.target
    setUser((curr) => ({ ...curr, [name]: value }))

    const isPswdEmpty = name === 'pswd' || user.pswd !== '';
    const isIdEmpty = name === 'id' || user.id !== '';
    setIsLoginActive(value !== '' && isPswdEmpty && isIdEmpty);
  }

  const handleLogin = () => {
    if (!validateEmail(user.id) || !validatePswd(user.pswd)) {
      modalOpen({
        content: '등록된 아이디가 아니에요.\n이메일 또는 비밀번호를확인 해주세요',
      });
    } else {
      loginAxios();
    }
  };
  const toggleShowPswd = () => {
    setIsShownPswd(!isShownPswd);
  };

  const loginAxios = async () => {
    try {
      const response = await Post('/auth/signin', {
        email: user.id,
        password: user.pswd,
      });
      const { accessToken, refreshToken, userInfo } = response;
      setLoginInfo(accessToken, refreshToken, userInfo);
      navigateTo('/home');
  
    } catch (error) {
      modalOpen({
        content: ('로그인에 실패했습니다.'),
      })
      /*
      setUser({
        id: '',
        pswd: '',
    })*/
  }
}
  return (
    <LoginPageView
      user={user}
      onChangeUser={onChangeUser}
      handleLogin={handleLogin}
      handleKakaoLogin={handleKakaoLogin}
      isShownPswd={isShownPswd}
      toggleShowPswd={toggleShowPswd}
      isLoginActive={isLoginActive}
    />
  );
};

export default LoginPage;
