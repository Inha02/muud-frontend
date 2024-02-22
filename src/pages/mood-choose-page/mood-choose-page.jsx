import styles from './mood-choose-page.module.css';




const MoodChoosePageView = ({ handleButtonClick, selectedOption, currentDate, moodArray }) => {

  const MoodButton = ({ children, index, option }) => {
    const style = (selectedOption == index) ? styles.moodBtn + ' ' + styles.active : (selectedOption == undefined) ? styles.moodBtn : styles.moodBtn + ' ' + styles.inactive;
    return (
      <div className={styles.btnContainer}>
        <button
          className={style}
          onClick={() => handleButtonClick(index)}
        >{children}</button>
      </div >
    )
  }

  return (
    <div className='appContainer back'>
      <div>{currentDate}
      </div>

      <div>오늘 느낀 감정을 골라주세요</div>
      <div>내가 느낀 감정 한개를 선택해주세요</div>

      {moodArray.map((item, index) => (<MoodButton key={index} index={index}>{item.text}</MoodButton>))}

    </div>
  )
}

export default MoodChoosePageView
