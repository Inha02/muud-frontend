const RegisterPageView =({user , onChangeUser})=>{ 
return(
    <div>
    <h1>회원가입</h1>
    <input type="text"
      onChange={onChangeUser}
      name ="id"
      value={user.id}
      placeholder='아이디' />
    <input type="password" 
       onChange={onChangeUser}
       value={user.psw}
       name ="psw"
       placeholder='비번'/>

    <button>회원가입</button>

  </div>
)
};

export default RegisterPageView;