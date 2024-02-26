import { useState, useEffect } from 'react'
import { useModal } from '../../context/ModalContext'
import RegisterPageView from './register-page'
import { validateEmail, validatePswd } from '../../utils'
import axios from 'axios';
import { Post } from '../../api/axios';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const { modalOpen } = useModal()
  const navigateTo = useNavigate();
  const [user, setUser] = useState({
    id: '',
    pswd: '',
    pswdCheck: '',
  })
  const [isShownPswd, setIsShownPswd] = useState(false)
  const [isRegisterActive, setIsRegisterActive] = useState(false)

  const onChangeUser = (event) => {
    const { name, value } = event.target
    setUser((curr) => ({ ...curr, [name]: value }))

    const isPswdValid = validatePswd(name === 'pswd' ? value : user.pswd);
    const isIdValid = validateEmail(name === 'id' ? value : user.id);
    setIsRegisterActive(value !== '' && isPswdValid && isIdValid && user.pswdCheck !== '');
  }

  const validatePswdCheck = () => {
    return user.pswdCheck != '' && user.pswd == user.pswdCheck
  }

  const toggleShowPswd = () => {
    setIsShownPswd(!isShownPswd)
  }

  const handleRegister = () => {
    if (!validateEmail(user.id) || !validatePswd(user.pswd) || !validatePswdCheck()) {
      modalOpen({
        content: ('등록된 아이디가 아니에요.\n이메일 또는 비밀번호를확인 해주세요.'
        ),
      })
    } else {

      registerAxios();
    }
  }

  const registerAxios = async () => {
    try {
      const response = await Post('auth/signup', {
        email: user.id,
        password: user.pswd,
        nickname: '별명'
      });

      if (response.statusCode === '400') {
        modalOpen({
          content: ('가입 오류\n이미 가입된 이메일 입니다'),
        })
      } else {
        modalOpen({
          content: ('환영합니다!\n회원 가입 완료'),
          handleClose: () => { navigateTo('/login') }
        })
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  useEffect(() => {
  }, []);

  return (
    <RegisterPageView
      user={user}
      onChangeUser={onChangeUser}
      isShownPswd={isShownPswd}
      isRegisterActive={isRegisterActive}
      toggleShowPswd={toggleShowPswd}
      handleRegister={handleRegister}
    />
  )
}

export default RegisterPage
