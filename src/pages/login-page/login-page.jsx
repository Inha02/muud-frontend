import RoundButton from '../../components/RoundButton';
import SimpleModal from '../../components/SImpleModal';
import styles from './login-page.module.css';
import { useEffect, useState } from 'react';


const LoginPageView = ({ id, pswd, onChangeId, onChangePswd, handleLogin, handleKakaoLogin, isShownPswd, toggleShowPswd, isLoginActive }) => { //프롭스 대신 객체로 넣기(타입)

  return (
    <>

      <div className='appContainer'>
        <div>
          <div className={styles.muudText}>MUUD</div>
          <div className={styles.text}>감정을 음악으로,</div>
          <div className={styles.text}>순간의 감정을 음악과 함께 기록하세요</div>
        </div>

        <div className={styles.emailText}>이메일 주소</div>
        <input type="text"
          onChange={onChangeId}
          value={id}
          placeholder='예)muud@muud.co.kr'
          required
          className={styles.box}
        />

        <div className={styles.pswdText}>비밀번호</div>
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

        <div style={{ marginTop: '1.5em' }}>
          <RoundButton onClick={handleLogin} active={isLoginActive}>로그인</RoundButton>
        </div>

        <div style={{ marginTop: '0.5em' }} className={styles.textCenter}>
          <span style={{ display: 'inline-block', marginRight: '10px' }}><a>회원가입</a></span>
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