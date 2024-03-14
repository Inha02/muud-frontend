import DoubleButton from '../../components/common/DoubleButton';
import MusicPlayer from '../../components/MusicPlayer'
import Tag from '../../components/common/Tag';
import styles from './diary-detail-page.module.css';
import Tags from '../../components/common/Tags';

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
          <div className={styles.titleContainer}>
            <img className={styles.moodEmojiSmall} src={diary.emotion.emoji} alt='emotion' />
            <div className={styles.titleTxt}>{currentDateKor}</div>
          </div>
          <div className='cardContainer'>
            <MusicPlayer video={diary.playlist.videoId} />
            <div className='mTopES'>
              {diary.emotion.tags && (<Tags array={diary.emotion.tags}></Tags>)}
            </div>
            <textarea id='content' className='moodTextArea small' placeholder='오늘의 감정을 기록해보세요' maxLength={maxLength} value={text} onChange={handleChange} >{text}</textarea>
            <div className={styles.charCounter}>
              {enteredChars}/{maxLength}
            </div>
          </div>
        </>
      )
      }

      <DoubleButton
        leftTxt={'취소'}
        leftStyle={{ 'backgroundColor': 'white', 'color': '#252525' }}
        rightTxt={'수정'}
        leftActive={true}
        rightActive={isRightBtnActive}
        handleLeftClick={handleLeftClick}
        handleRightClick={handleRightClick}
        bottom
      ></DoubleButton>

    </div >
  )
}

export default DiaryDetailPageView
