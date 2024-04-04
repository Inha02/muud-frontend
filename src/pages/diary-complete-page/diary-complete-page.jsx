import MusicPlayer from '../../components/MusicPlayer'
import Tag from '../../components/common/Tag'
import RoundButton from '../../components/common/RoundButton'
import styles from './diary-complete-page.module.css' // CSS 모듈 임포트

const DiaryCompletePageView = ({ diary, currentDateKor, handleClick }) => {
  return (
    <div className='appContainer'>
      <div className={styles.iconContainer + ' mTop'}>
        <div className={styles.checkIco}></div>
      </div>
      <div className={styles.textComplete}>기록완료</div>
      <div className={`${styles.dateText} align`}>{currentDateKor}</div>
      <div>
        <div>
          <div className='cardContainer'>
            {diary.playlist && (
              <>
                <MusicPlayer video={diary.playlist.videoId} />
                <div className='mMc'>
                  {diary.emotion.tags &&
                    diary.emotion.tags.map((item) => <Tag key={item}>{item}</Tag>)}
                </div>
                <div className={styles.content}>
                  {diary.content}
                </div>
              </>
            )
            }
          </div>
        </div>
      </div>

      <RoundButton
        onClick={handleClick}
        active
        bottom
      >
        확인
      </RoundButton>
    </div>
  )
}

export default DiaryCompletePageView
