import styles from './mood-choose-page.module.css';

const MoodChoosePageView = ({ handleButtonClick, selectedOption, currentDate, moodArray }) => {

  const MoodButton = ({ children, mood }) => {
    const style = (selectedOption == mood) ? styles.moodBtn + ' ' + styles.active : (selectedOption == undefined) ? styles.moodBtn : styles.moodBtn + ' ' + styles.inactive;
    return (
      <div className={styles.btnContainer}>
        <button
          className={style}
          onClick={() => handleButtonClick(mood)}
        >{children}</button>
      </div >
    )
  }

  return (
    <div className='appContainer topbar'>
      <div>{currentDate}
      </div>

      <div>오늘 느낀 감정을 골라주세요</div>
      <div>내가 느낀 감정 한개를 선택해주세요</div>

      {moodArray.map((item, index) => (<MoodButton key={index} index={index} mood={item.mood}>{item.text}</MoodButton>))}

    </div>
  )
}

export default MoodChoosePageView
