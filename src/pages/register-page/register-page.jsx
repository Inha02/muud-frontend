import CloseBar from "../../components/common/CloseBar";
import RoundButton from '../../components/common/RoundButton';
import styles from './register-page.module.css';


const RegisterPageView = ({ user, onChangeUser, handleRegister, isRegisterActive, isShownPswd, toggleShowPswd }) => {
  return (
    <div className="appContainer">
      <CloseBar></CloseBar>
      <header>회원가입</header>
      <div>이메일 주소가 무엇인가요?</div>
      <input
        type="text"
        name="id"
        onChange={onChangeUser}
        value={user.id}
        placeholder='예)muud@muud.co.kr'
        required
      />

      <div >뮤디에서 사용할 이름을 입력해주세요</div>
      <div>공백없이 10자 이하만 가능합니다.</div>
      <input type="text"
        name="nickname"
        onChange={onChangeUser}
        value={user.nickname}
        required
        className={styles.box}
      />

      <div>비밀번호 만들기</div>
      <div>8~15자로 입력해주세요.</div>
      <div className='pswdWrap'>
        <input
          className='pswdInput'
          type={isShownPswd ? "text" : "password"}
          name="pswd"
          onChange={onChangeUser}
          value={user.pswd}
          minLength={8}
          required
        />
        <div className='eyeBtnContainer'>
          <div className={'eyeBtn ' + (isShownPswd ? 'show' : 'hide')} onClick={toggleShowPswd}>
          </div>
        </div>
      </div>

      <div>비밀번호 확인</div>
      <input
        type="password"
        name="pswdCheck"
        onChange={onChangeUser}
        value={user.pswdCheck}
      />

      <RoundButton onClick={handleRegister} active={isRegisterActive}>계정 만들기</RoundButton>

    </div>
  )
};

export default RegisterPageView;