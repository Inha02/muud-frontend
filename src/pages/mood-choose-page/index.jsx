import { useEffect, useState, useContext, useRef } from 'react'
import { useUserContext } from '../../context/UserContext';
import MoodChoosePageView from './mood-choose-page'
import { useNavigate } from 'react-router-dom';

const MoodChoosePage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { currentDate } = useUserContext();
  const navigateTo = useNavigate();

  const moodArray = [
    { mood: 'NORMAL', text: '내 마음은 조용하고 단순한 분위기예요' },
    { mood: 'HAPPY', text: '두근두근 기분이 좋고,웃을 일이 많아요' },
    { mood: 'SAD', text: '뭔가 입맛이 없고, 자꾸 슬퍼져요' },
    { mood: 'BUSY', text: '할 일이 너무 많고, 하루가 길게 느껴져요' },
    { mood: 'STRESS', text: '답답하고, 스트레스를 많이 받았어요' },
    { mood: 'ANGER', text: '왠지 모르게 작은 일에도 쉽게 화가 나요' }

  ];

  const handleMoodClick = (option) => {
    setSelectedOption(option);
  }

  const handleButtonClick = () => {
    if (selectedOption != null)
      navigateTo('/mood/result', { state: selectedOption }); //감정 전달
  };

  return (
    <MoodChoosePageView
      selectedOption={selectedOption}
      handleMoodClick={handleMoodClick}
      handleButtonClick={handleButtonClick}
      currentDate={currentDate}
      moodArray={moodArray}
    />
  )
}

export default MoodChoosePage
