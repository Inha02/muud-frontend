import { useEffect, useState } from 'react'
import RegisterPageView from './register-page'

const RegisterPage = () => {
  const [user, setUser] = useState({
    id: "",
    psw: ""
  })

  const onChangeUser = (event) => {
    const { name, value } = event.target;
    setUser((curr => ({ ...curr, [name]: value })));
  }

  return (
    <RegisterPageView user={user} onChangeUser={onChangeUser} />
  )
}

export default RegisterPage
