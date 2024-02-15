import { useEffect, useState } from 'react'
import LoginPageView from './login-page'

const LoginPage = () => {
  const REST_API_KEY = import.meta.env.VITE_KAKAO_KEY
  const REDIRECT_URI = `${import.meta.env.VITE_HOST}/auth/kakao/callback`
  // oauth 요청 URL
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL
  }

  const [id, setId] = useState("")
  const [psw, setPsw] = useState("")

  const onChangeId = (event) => {
    setId(event.target.value)
  }
  const onChangePwd = (event) => {
    setPsw(event.target.value)
  }
  const handleLogin = () => {
    return
  }

  const a = 1


  return (
    <LoginPageView id={id} psw={psw} onChangeId={onChangeId} onChangePwd={onChangePwd} handleLogin={handleLogin} handleKakaoLogin={handleKakaoLogin} />
  )
}

export default LoginPage
