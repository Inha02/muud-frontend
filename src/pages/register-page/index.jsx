import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import { useModal } from '../../context/ModalContext'
import RegisterPageView from './register-page'
import { validateEmail, validatePswd } from '../../utils'
import { Post, setConfig } from '../../api/axios';
import moment from 'moment';

const RegisterPage = () => {
  const { modalOpen } = useModal()
  const navigateTo = useNavigate();
  const [cookies, setCookie] = useCookies(['accessToken', 'refreshToken', 'id', 'nickname']);
  const { setIsAuthenticated } = useUserContext()
  const [isShownPswd, setIsShownPswd] = useState(false)
  const [isShownPswdCheck, setIsShownPswdCheck] = useState(false)
  const [isRegisterActive, setIsRegisterActive] = useState(true)
  const [user, setUser] = useState({
    id: '',
    nickname: '',
    pswd: '',
    pswdCheck: '',
  })

  const onChangeUser = (event) => {
    const { name, value } = event.target
    setUser((curr) => ({ ...curr, [name]: value }))

    const isPswdValid = validatePswd(name === 'pswd' ? value : user.pswd);
    const isIdValid = validateEmail(name === 'id' ? value : user.id);
    const isNickValid = '' !== (name === 'nickname' ? value : user.nickname);
    const isPswdCheckValid = '' !== (name === 'pswdCheck' ? value : user.pswdCheck);

    setIsRegisterActive(value !== '' && isPswdValid && isIdValid && isPswdCheckValid && isNickValid);
  }

  const validatePswdCheck = () => {
    return user.pswdCheck != '' && user.pswd == user.pswdCheck
  }

  const toggleShowPswd = () => {
    setIsShownPswd(!isShownPswd)
  }

  const toggleShowPswdCheck = () => {
    setIsShownPswdCheck(!isShownPswdCheck)
  }

  const handleClickClose = () => {
    navigateTo('/login', { replace: true })
  }
  const handleRegister = () => {
    if (!validateEmail(user.id) || !validatePswd(user.pswd) || !validatePswdCheck()) {
      modalOpen({
        content: ('잘못된 회원 정보입니다.\n이메일 또는 비밀번호를 확인해주세요.'
        ),
      })
    } else {
      registerAxios();
    }
  }

  const registerAxios = async () => {
    try {
      await Post('/auth/signup', {
        email: user.id,
        password: user.pswd,
        nickname: user.nickname
      });
      loginAxios(user.id, user.pswd);

    } catch (error) {
      console.log(error)
      if (error.response.status == 409) {
        modalOpen({
          content: ('이미 가입된 이메일 입니다'),
        })
      } else {
        modalOpen({
          content: ('가입 오류\n회원가입에 실패했습니다.'),
        })
      }

    }
  };

  const loginAxios = async (id, pswd) => {
    try {
      const response = await Post('/auth/signin', {
        email: id,
        password: pswd,
      });
      const { accessToken, refreshToken, userInfo } = response.data;
      setCookie('accessToken', accessToken, { path: '/' });
      setCookie('refreshToken', refreshToken, { path: '/' });
      setCookie('id', userInfo.id, { path: '/' });
      setCookie('nickname', userInfo.nickname, { path: '/' });
      setCookie('expiresAt', moment().add(15, "minutes").format("yyyy-MM-DD HH:mm:ss"), { path: '/' });
      setConfig({ accessToken: accessToken });
      setIsAuthenticated(true)
      modalOpen({
        content: ('환영합니다!\n회원 가입 완료'),
        link: '/introduce',
      })
    } catch (error) {
      modalOpen({
        content: ('환영합니다!\n회원 가입 완료'),
        link: '/login',
      })
    }
  }



  return (
    <RegisterPageView
      user={user}
      onChangeUser={onChangeUser}
      isShownPswd={isShownPswd}
      isShownPswdCheck={isShownPswdCheck}
      isRegisterActive={isRegisterActive}
      toggleShowPswd={toggleShowPswd}
      handleRegister={handleRegister}
      handleClickClose={handleClickClose}
      toggleShowPswdCheck={toggleShowPswdCheck}
    />
  )
}

export default RegisterPage
