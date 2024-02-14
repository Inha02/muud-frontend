import { useEffect, useState } from 'react'
import LoginPageView from './login-page'

const LoginPage = () => {
  const Rest_api_key = import.meta.env.VITE_KAKAO_KEY
  const redirect_uri = 'http://localhost:5173/'
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
  const handleKakaoLogin = () => {
    window.location.href = kakaoURL
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
