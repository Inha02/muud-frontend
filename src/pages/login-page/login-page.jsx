import RoundButton from '../../components/common/RoundButton';
import styles from './login-page.module.css';

const LoginPageView = ({ user, isPwNoticeActive, isIdNoticeActive, onChangeUser, handleLogin, handleKakaoLogin, isShownPswd, toggleShowPswd, isLoginActive, handleClickRegister }) => { //프롭스 대신 객체로 넣기(타입)

  return (
    <>
      <div className='appContainer'>
        <div>
          <div className={styles.muudText}>MUUD</div>
          <div className={styles.text}>감정을 음악으로,</div>
          <div className={styles.text}>순간의 감정을 음악과 함께 기록하세요</div>
        </div>

        <form>
          <div className='emailText'>이메일 주소</div>
          <input type="text"
            name="id"
            onChange={onChangeUser}
            value={user.id}
            placeholder='예)muud@muud.co.kr'
            required
            className={styles.box}
          />

          {isIdNoticeActive &&
            <div className={styles.wrongInfo}>*올바른 이메일 형식을 입력해주세요</div>
          }
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

          {isPwNoticeActive &&
            <div className={styles.wrongInfo}>*아직 8자리 이상 15자리 이하가 아니에요</div>
          }
          <div style={{ marginTop: '1.5em' }}>
            <RoundButton onClick={handleLogin} active={isLoginActive}>로그인</RoundButton>
          </div>
        </form>

        <div style={{ marginTop: '0.5em' }} className={styles.textCenter}>
          <span className={styles.find} onClick={handleClickRegister}>회원가입</span>
          <span style={{ marginRight: '1em', marginLeft: '1em' }}>|</span>
          <span className={styles.find}>이메일 찾기</span>
          <span style={{ marginRight: '1em', marginLeft: '1em' }}>|</span>
          <span className={styles.find}>비밀번호 찾기</span>
        </div>

        <div style={{ marginTop: '15em', textAlign: 'center' }} className={styles.snsText}>SNS 계정으로 간편 가입하기</div>

        <div style={{ marginTop: '0.5em', textAlign: 'center' }}>
          <button className={styles.kakaoLoginBtn} onClick={handleKakaoLogin}></button>
        </div>


      </div>
    </>
  )
};

export default LoginPageView;