import { useState } from 'react';
import { useCookies } from 'react-cookie';
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
  const [isIdNoticeActive, setIsIdNoticeActive] = useState(false);
  const [isPwNoticeActive, setIsPwNoticeActive] = useState(false);

  const { modalOpen } = useModal();
  const [cookies, setCookie] = useCookies(['accessToken', 'refreshToken', 'id', 'nickname']);
  const { setIsAuthenticated } = useUserContext()
  const REST_API_KEY = import.meta.env.VITE_KAKAO_KEY;
  const REDIRECT_URI = `${import.meta.env.VITE_HOST}/oauth2/callback/kakao`;
  // oauth 요청 URL
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  const handleClickRegister = () => {
    navigateTo('/register');
  };

  const handleLogin = () => {
    if (validate(user.id, user.pswd)) return
    loginAxios();
  };

  const validate = (id, pswd) => {
    const idCheck = id !== '' && !validateEmail(id);
    const pwCheck = pswd !== '' && !validatePswd(pswd);
    setIsIdNoticeActive(idCheck);
    setIsPwNoticeActive(pwCheck);
    return idCheck || pwCheck;
  }

  const onChangeUser = (event) => {
    const { name, value } = event.target
    setUser((curr) => ({ ...curr, [name]: value }))

    const isPswdEmpty = name === 'pswd' || user.pswd !== '';
    const isIdEmpty = name === 'id' || user.id !== '';
    setIsLoginActive(value !== '' && isPswdEmpty && isIdEmpty);
    if (name === 'id') validate(value, user.pswd)
    if (name === 'pswd') validate(user.id, value)

  }

  const toggleShowPswd = () => {
    setIsShownPswd(!isShownPswd);
  };

  const loginAxios = async () => {
    try {
      const response = await Post('/auth/signin', {
        email: user.id,
        password: user.pswd,
      });
      const { accessToken, refreshToken, userInfo } = response.data;
      setCookie('accessToken', accessToken, { path: '/' });
      setCookie('refreshToken', refreshToken, { path: '/' });
      setCookie('id', userInfo.id, { path: '/' });
      setCookie('nickname', userInfo.nickname, { path: '/' });
      setIsAuthenticated(true)
      navigateTo('/home');

    } catch (error) {
      console.log(error)
      if (error.response.status == 400) {
        modalOpen({
          content: ('입력 형식 오류\n이메일 또는 비밀번호를확인 해주세요'),
        })
      }
      else if (error.response.status == 401) {
        modalOpen({
          content: ('등록된 아이디가 아니에요.\n이메일 또는 비밀번호를확인 해주세요'),
        })
      } else {
        modalOpen({
          content: ('로그인 요청 실패'),
        })
      }
      setUser({
        id: '',
        pswd: '',
      })
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
      isIdNoticeActive={isIdNoticeActive}
      isPwNoticeActive={isPwNoticeActive}
      handleClickRegister={handleClickRegister}
    />
  );
};

export default LoginPage;
