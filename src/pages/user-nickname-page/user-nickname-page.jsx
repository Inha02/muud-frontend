
import styles from './user-nickname-page.module.css';
import RoundButton from '../../components/common/RoundButton';

const UserNicknamePageView = ({ nickname, onChangeNickname, isBtnActive, handleClick }) => {

  return (
    <div className='appContainer topbar'>
      <div className={styles.muuudMainText}>뮤드에서 사용할<br />
        이름을 입력해주세요.
      </div>
      <div className={styles.text}>
        이름은 공백없이 10자 이하만<br />
        가능합니다.
      </div>
      <input type="text"
        onChange={onChangeNickname}
        value={nickname}
        placeholder='이름을 입력해주세요'
        required
        maxLength={10}
        className={styles.box}
      />

      <div style={{ marginTop: '25em' }}>
        <RoundButton onClick={handleClick} active={isBtnActive}>완료</RoundButton>
      </div>

    </div >
  )
}

export default UserNicknamePageView
