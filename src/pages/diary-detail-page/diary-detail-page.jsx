import DoubleButton from '../../components/common/DoubleButton';
import MusicPlayer from '../../components/MusicPlayer'
import Tag from '../../components/common/Tag';
import styles from './diary-detail-page.module.css';

const DiaryDetailPageView = ({
  currentDateKor,
  isRightBtnActive,
  handleLeftClick,
  handleRightClick,
  text,
  handleChange,
  enteredChars,
  maxLength,
  diary

}) => {
  return (
    <div className='appContainer topbar'>
      {diary.emotion && (
        <>
          <img className={styles.moodEmoji} src={diary.emotion.emoji} alt='emotion' />
          <div>{currentDateKor}
          </div>
          <div className={styles.cardContainer}>
            {diary.playlist && <MusicPlayer video={diary.playlist.videoId} />}
            <div>
              {diary.emotion.tags &&
                diary.emotion.tags.map((item) => <Tag key={item}>{item}</Tag>)}
            </div>
            <textarea id='content' className={styles.moodTextarea} placeholder='오늘의 감정을 기록해보세요' maxLength={200} value={text} onChange={handleChange} >{text}</textarea>
          </div>
        </>
      )}

      <div>
        {enteredChars}/{maxLength}
      </div>
      <DoubleButton
        leftTxt={'취소'}
        leftStyle={{ 'backgroundColor': 'white', 'color': '#252525' }}
        rightTxt={'수정'}
        leftActive={true}
        rightActive={isRightBtnActive}
        handleLeftClick={handleLeftClick}
        handleRightClick={handleRightClick}
      ></DoubleButton>

    </div >
  )
}

export default DiaryDetailPageView
