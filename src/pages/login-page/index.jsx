import { useEffect, useState } from 'react'
import LoginPageView from './login-page'

const LoginPage =() => {
  const [id, setId] = useState("")
  const [psw, setPsw] = useState("")

  const onChangeId = (event) =>{
    setId(event.target.value)
  }
  const onChangePwd = (event) =>{
    setPsw(event.target.value)
  }
  const handleLogin = ()=>{
      return
  }

  return (
  <LoginPageView id={id} psw={psw} onChangeId={onChangeId} onChangePwd={onChangePwd} handleLogin={handleLogin}/>
  )
}

export default LoginPage
