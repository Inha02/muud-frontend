import { useEffect, useState } from 'react';
import LoginPageView from './login-page';

const LoginPage = () => {
  const [id, setId] = useState('');
  const [pswd, setPswd] = useState('');
  const [isShownPswd, setIsShownPswd] = useState(false);
  const [isLoginActive, setIsLoginActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);




  const REST_API_KEY = import.meta.env.VITE_KAKAO_KEY;
  const REDIRECT_URI = `${import.meta.env.VITE_HOST}/auth/kakao/callback`;
  // oauth 요청 URL
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  const onChangeId = (event) => {
    setId(event.target.value);
    validateInfo();
  };
  const onChangePswd = (event) => {
    setPswd(event.target.value);
    validateInfo();
  };
  const handleLogin = () => {


  };
  const toggleShowPswd = () => {
    setIsShownPswd(!isShownPswd);
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }
  const validatePswd = (pswd) => {
    return pswd.length >= 8;
  }

  const validateInfo = () => {
    if (!validateEmail(id) || !validatePswd(pswd)) {
      // 이메일 또는 비밀번호가 유효하지 않은 경우
    } else {
      setIsLoginActive(true);
    }
  }

  return (
    <LoginPageView
      id={id}
      pswd={pswd}
      onChangeId={onChangeId}
      onChangePswd={onChangePswd}
      handleLogin={handleLogin}
      handleKakaoLogin={handleKakaoLogin}
      isShownPswd={isShownPswd}
      toggleShowPswd={toggleShowPswd}
      isLoginActive={isLoginActive}
      isModalOpen={isModalOpen}
    />
  );
};

export default LoginPage;
