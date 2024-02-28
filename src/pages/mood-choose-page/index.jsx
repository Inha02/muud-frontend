import { useEffect, useState, useContext, useRef } from 'react'
import { useUserContext } from '../../context/UserContext';
import MoodChoosePageView from './mood-choose-page'
import { useNavigate } from 'react-router-dom';
import {moodQnAArray} from '../../constants/testData'

const MoodChoosePage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { currentDate } = useUserContext();
  const navigateTo = useNavigate();

  const handleMoodClick = (option) => {
    setSelectedOption(option);
  }

  const handleButtonClick = () => {
    if (selectedOption != null)
      navigateTo(`/mood/result?mood=${selectedOption}`) //, { state: selectedOption }); //감정 전달
  };

  return (
    <MoodChoosePageView
      selectedOption={selectedOption}
      handleMoodClick={handleMoodClick}
      handleButtonClick={handleButtonClick}
      currentDate={currentDate}
      moodArray={moodQnAArray}
    />
  )
}

export default MoodChoosePage
