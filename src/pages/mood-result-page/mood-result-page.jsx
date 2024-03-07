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
      <div>{currentDateKor}
      </div>

      {moodData && (<>
        <img className={styles.moodEmoji} src={moodData.emoji} alt='emotion' />
        <div>{moodData.combinedName}</div>
        <div>{moodData.description}</div>
        {moodData.tags && moodData.tags.map((item) => (<Tag key={item}>{item}</Tag>))}
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
