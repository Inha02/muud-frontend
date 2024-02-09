const LoginPageView =({id, psw, onChangeId, onChangePwd,handleLogin})=>{ //프롭스 대신 객체로 넣기(타입)
  return(
    <div>
    <h1>로그인</h1>
    <input type="text"
      onChange={onChangeId}
      value={id}
      placeholder='아이디' />
    <input type="password" 
       onChange={onChangePwd}
       value={psw}
       placeholder='비번'/>

    <button onClick={handleLogin}>로그인</button>

  </div>
)
};

export default LoginPageView;