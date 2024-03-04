import RoundButton from '../../components/common/RoundButton';
import styles from './login-page.module.css';

const LoginPageView = ({ user, onChangeUser, handleLogin, handleKakaoLogin, isShownPswd, toggleShowPswd, isLoginActive, handleClickRegister }) => { //프롭스 대신 객체로 넣기(타입)

  return (
    <>
      <div className='appContainer'>
        <div>
          <div className={styles.muudText}>MUUD</div>
          <div className={styles.text}>감정을 음악으로,</div>
          <div className={styles.text}>순간의 감정을 음악과 함께 기록하세요</div>
        </div>

        <div className='emailText'>이메일 주소</div>
        <input type="text"
          name="id"
          onChange={onChangeUser}
          value={user.id}
          placeholder='예)muud@muud.co.kr'
          required
          className={styles.box}
        />

        <div className='pswdText'>비밀번호</div>
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

        <div style={{ marginTop: '1.5em' }}>
          <RoundButton onClick={handleLogin} active={isLoginActive}>로그인</RoundButton>
        </div>

        <div style={{ marginTop: '0.5em' }} className={styles.textCenter}>
          <span style={{ display: 'inline-block', marginRight: '10px' }}><a onClick={handleClickRegister}>회원가입</a></span>
          <span>|</span>
          <span style={{ display: 'inline-block', marginRight: '10px', marginLeft: '10px' }}><a>이메일 찾기</a></span>
          <span>|</span>
          <span style={{ display: 'inline-block', marginLeft: '10px' }}><a>비밀번호 찾기</a></span>
        </div>

        <div style={{ marginTop: '10em', textAlign: 'center' }}>SNS 계정으로 간편 가입하기</div>

        <div style={{ marginTop: '0.5em', textAlign: 'center' }}>
          <button onClick={handleKakaoLogin}>카카오 로그인</button>
        </div>
      </div>
    </>
  )
};

export default LoginPageView;