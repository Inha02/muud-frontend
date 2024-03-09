import DoubleButton from '../../components/common/DoubleButton';
import Tag from '../../components/common/Tag';
import styles from './mood-result-page.module.css';

const MoodResultPageView = ({
  currentDateKor,
  isRightBtnActive,
  handleSkipClick,
  handleRightClick,
  text,
  handleChange,
  enteredChars,
  maxLength,
  moodData
}) => {
  return (
    <div className='appContainer topbar'>

      <div className={styles.textDate}>{currentDateKor}
      </div>

      {moodData && (
        <div className={styles.moodResultContainer}>
          <img className={styles.moodEmoji} src={moodData.emoji} alt='emotion' />
          <div className={styles.moodResult}>{moodData.combinedName}</div>
          <div className={styles.moodResultDescription}>{moodData.description}</div>
          <div className={styles.tagsContainer}>
            {moodData.tags && moodData.tags.map((item) => (<Tag key={item}>{item}</Tag>))}
          </div>
        </div>
      )}

      <div>
        <textarea className={styles.moodTextArea} placeholder='오늘의 감정을 기록해보세요' maxLength={200} value={text} onChange={handleChange} >
        </textarea>
        <div className={styles.charCounter}>
          {enteredChars}/{maxLength}
        </div>
      </div>
      <DoubleButton
        leftTxt={'건너뛰기'}
        leftStyle={{ 'backgroundColor': 'white', 'color': '#252525' }}
        rightTxt={'다음'}
        leftActive={true}
        rightActive={isRightBtnActive}
        handleLeftClick={handleSkipClick}
        handleRightClick={handleRightClick}
        bottom
      ></DoubleButton>

    </div >
  )
}

export default MoodResultPageView
