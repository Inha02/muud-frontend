import RoundButton from '../../components/RoundButton';
import SimpleModal from '../../components/SImpleModal';
import styles from './login-page.module.css';

const LoginPageView = ({ id, pswd, onChangeId, onChangePswd, handleLogin, handleKakaoLogin, isShownPswd, toggleShowPswd, isModalOpen }) => { //프롭스 대신 객체로 넣기(타입)

  return (
    <>

      <div className='appContainer'>
        <div>
          <div>MUUD</div>
          <div>감정을 음악으로,</div>
          <div>순간의 감정을 음악과 함께 기록하세요</div>
        </div>
        <div>이메일 주소</div>
        <input type="text"
          onChange={onChangeId}
          value={id}
          placeholder='예)muud@muud.co.kr'
          required
        />

        <div>비밀번호</div>
        <div className={styles.pswdWrap}>
          <input
            className={styles.pswdInput}
            type={isShownPswd ? "text" : "password"}
            onChange={onChangePswd}
            value={pswd}
            minLength={8}
            required
          />
          <div className={styles.eyeBtnContainer}>
            <div className={isShownPswd ? styles.eyeBtn + ' ' + styles.show : styles.eyeBtn + ' ' + styles.hide} onClick={toggleShowPswd}>
            </div>
          </div>
        </div>

        <RoundButton onClick={handleLogin}>로그인</RoundButton>
        <div>
          <span><a>회원가입</a></span>
          <span><a>이메일 찾기</a></span>
          <span><a>비밀번호 찾기</a></span>
        </div>
        <div>SNS 계정으로 간편 가입하기</div>
        <button onClick={handleKakaoLogin}>카카오 로그인</button>

        {isModalOpen && (
          <SimpleModal>
            등록된 아이디가 아니에요.<br />
            이메일 또는 비밀번호를 확인해주세요.
          </SimpleModal>
        )
        }


      </div>
    </>
  )
};

export default LoginPageView;