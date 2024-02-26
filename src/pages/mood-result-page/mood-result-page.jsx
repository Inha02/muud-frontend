import DoubleButton from '../../components/common/DoubleButton';
import Tag from '../../components/common/Tag';
import styles from './mood-result-page.module.css';

const MoodResultPageView = ({
  currentDate,
  isRightBtnActive,
  handleSkipClick,
  handleRightClick,
  text,
  handleChange,
  enteredChars,
  maxLength,
  moodResultData
}) => {
  /*
  const moodResultData = {
    "combinedName": "잔잔한 구름",
    "description": "조용하고 잔잔한 봄날의 그늘",
    "emoji": "/images/cloudy-mood.png",
    "tags": ["그저그럼", "SOSO", "덤덤"],
  };
  */
  return (
    <div className='appContainer topbar'>
      <div>{currentDate}
      </div>

      {moodResultData && (<>
        <img className={styles.moodEmoji} src={moodResultData.emoji} alt='emotion' />
        <div>{moodResultData.combinedName}</div>
        <div>{moodResultData.description}</div>
        {moodResultData.tags && moodResultData.tags.map((item) => (<Tag key={item}>{item}</Tag>))}
      </>
      )}

      <div>
        <textarea className={styles.moodTextarea} placeholder='오늘의 감정을 기록해보세요' maxLength={200} value={text} onChange={handleChange} >

        </textarea>
        <div>
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
      ></DoubleButton>

    </div >
  )
}

export default MoodResultPageView
