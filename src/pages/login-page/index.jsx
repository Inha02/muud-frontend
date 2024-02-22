import { useEffect, useState } from 'react';
import LoginPageView from './login-page';
import { useModal } from '../../context/ModalContext';

const LoginPage = () => {
  const [id, setId] = useState('');
  const [pswd, setPswd] = useState('');
  const [isShownPswd, setIsShownPswd] = useState(false);
  const [isLoginActive, setIsLoginActive] = useState(false);
  const { modalOpen } = useModal();

  const REST_API_KEY = import.meta.env.VITE_KAKAO_KEY;
  const REDIRECT_URI = `${import.meta.env.VITE_HOST}/auth/kakao/callback`;
  // oauth 요청 URL
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  const onChangeId = (event) => {
    setId(event.target.value);
    if (event.target.value !== '') {
      setIsLoginActive(true);
    }
    else { setIsLoginActive(false); }
  };
  const onChangePswd = (event) => {
    setPswd(event.target.value);
  };
  const handleLogin = () => {
    validateInfo();
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
      modalOpen({
        content: <div>등록된 아이디가 아니에요.<br />이메일 또는 비밀번호를확인 해주세요.</div>,
      });
    } else {
      modalOpen({
        content: <div>로그인처리</div>,
      });
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
    />
  );
};

export default LoginPage;
