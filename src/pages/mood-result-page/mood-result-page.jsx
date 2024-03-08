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
<<<<<<< HEAD
<<<<<<< HEAD
      <div className={styles.textDate}>{currentDate}
      </div>

      {moodResultData && (
        <div className={styles.moodResultContainer}>
          <img className={styles.moodEmoji} src={moodResultData.emoji} alt='emotion' />
          <div className={styles.moodResult}>{moodResultData.combinedName}</div>
          <div className={styles.moodResultDescription}>{moodResultData.description}</div>
          <div className={styles.tagsContainer}>
            {moodResultData.tags && moodResultData.tags.map((item) => (<Tag key={item}>{item}</Tag>))}
          </div>
        </div>
=======
      <div>{currentDateKor}
      </div>

=======
      <div>{currentDateKor}
      </div>

>>>>>>> 0498c850cd3caabeb8b2f39881931c03a46105c1
      {moodData && (<>
        <img className={styles.moodEmoji} src={moodData.emoji} alt='emotion' />
        <div>{moodData.combinedName}</div>
        <div>{moodData.description}</div>
        {moodData.tags && moodData.tags.map((item) => (<Tag key={item}>{item}</Tag>))}
      </>
>>>>>>> 0498c850cd3caabeb8b2f39881931c03a46105c1
      )}


      <div>
        <textarea className={styles.moodTextArea} placeholder='오늘의 감정을 기록해보세요' maxLength={200} value={text} onChange={handleChange} >

        </textarea>
        <div className={styles.charCounter}>
          {enteredChars}/{maxLength}
        </div>
      </div>
      <div className={styles.btn}>
        <DoubleButton
          leftTxt={'건너뛰기'}
          leftStyle={{ 'backgroundColor': 'white', 'color': '#252525' }}
          rightTxt={'다음'}
          leftActive={true}
          rightActive={isRightBtnActive}
          handleLeftClick={handleSkipClick}
          handleRightClick={handleRightClick}
        ></DoubleButton>
      </div>

    </div >
  )
}

export default MoodResultPageView
