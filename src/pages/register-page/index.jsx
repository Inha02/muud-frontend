import { useState } from 'react'
import { useModal } from '../../context/ModalContext'
import RegisterPageView from './register-page'
import { validateEmail, validatePswd } from '../../utils'

const RegisterPage = () => {
  const [user, setUser] = useState({
    id: '',
    pswd: '',
    pswdCheck: '',
  })
  const [isShownPswd, setIsShownPswd] = useState(false)
  const [isRegisterActive, setIsRegisterActive] = useState(false)
  const { modalOpen } = useModal()

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
    validateInfo()
  }

  const validateInfo = () => {
    if (!validateEmail(user.id) || !validatePswd(user.pswd) || !validatePswdCheck()) {
      modalOpen({
        content: (
          <div>
            등록된 아이디가 아니에요.
            <br />
            이메일 또는 비밀번호를확인 해주세요.
          </div>
        ),
      })
    } else {
      modalOpen({
        content: (
          <div>
            환영합니다!
            <br />
            회원 가입 완료
          </div>
        ),
      })
    }
  }

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
