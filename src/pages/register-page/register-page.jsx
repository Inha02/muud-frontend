import CloseBar from "../../components/common/CloseBar";
import RoundButton from '../../components/common/RoundButton';
import styles from './register-page.module.css';


const RegisterPageView = ({ user, onChangeUser, handleClickClose, handleRegister, isRegisterActive, isShownPswd, toggleShowPswd }) => {
  return (
    <div className="appContainer">
      <CloseBar onClick={handleClickClose}></CloseBar>
      <div className={styles.textRegister}>회원가입</div>
      <form>
        <div className='emailText'>이메일 주소가 무엇인가요?</div>
        <input
          className={styles.box}
          type="text"
          name="id"
          onChange={onChangeUser}
          value={user.id}
          placeholder='예)muud@muud.co.kr'
          required
          autoComplete='true'
        />

        <div className='emailText'>뮤디에서 사용할 이름을 입력해주세요</div>
        <div className={styles.textLetter} >공백없이 10자 이하만 가능합니다.</div>
        <input type="text"
          name="nickname"
          onChange={onChangeUser}
          value={user.nickname}
          required
          className={styles.box}
          autoComplete='true'
        />

        <div className='pswdText'>비밀번호 만들기</div>
        <div className={styles.textLetter}>8~15자로 입력해주세요.</div>
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

        <div className='emailText'>비밀번호 확인</div>
        <input
          className='pswdInput'
          type="password"
          name="pswdCheck"
          onChange={onChangeUser}
          value={user.pswdCheck}
        />
      </form>
      <RoundButton onClick={handleRegister} active={isRegisterActive} bottom>계정 만들기</RoundButton>

    </div>
  )
};

export default RegisterPageView;