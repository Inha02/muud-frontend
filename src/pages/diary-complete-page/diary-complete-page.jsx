import MusicPlayer from '../../components/MusicPlayer'
import Tag from '../../components/common/Tag'
import RoundButton from '../../components/common/RoundButton'
import styles from './diary-complete-page.module.css' // CSS 모듈 임포트

const DiaryCompletePageView = ({ diary, currentDateKor, playlist, handleClick }) => {
  return (
    <div className='appContainer'>
      <div className={styles.checkIco}></div>
      <div>기록완료</div>
      <div>{currentDateKor}</div>

      <div>
        <div>
          <div className={styles.cardContainer}>
            <MusicPlayer video={playlist.videoId} />
            <div>
              <div>
                {playlist.tags &&
                  playlist.tags.map((item) => <Tag key={item}>{item}</Tag>)}
              </div>
            </div>
            가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차
          </div>
        </div>
      </div>

      <RoundButton
        onClick={handleClick}
        active
      >
        확인
      </RoundButton>
    </div>
  )
}

export default DiaryCompletePageView
