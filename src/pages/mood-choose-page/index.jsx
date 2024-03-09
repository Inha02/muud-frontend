import { useEffect, useState } from 'react'
import { useUserContext } from '../../context/UserContext';
import { useLocation, useNavigate } from 'react-router-dom'
import MoodChoosePageView from './mood-choose-page'
import { moodQnAArray } from '../../constants/testData'


const MoodChoosePage = () => {
  //  const location = useLocation();
  //  const { state } = location;
  const [selectedOption, setSelectedOption] = useState(null);
  const { currentDateKor } = useUserContext();
  const navigateTo = useNavigate();

  const handleMoodClick = (option) => {
    setSelectedOption(option);
  }

  const handleButtonClick = () => {
    if (selectedOption != null)
      navigateTo(`/mood/result`, { state: selectedOption }); //감정 전달
  };

  useEffect(() => {
  }, []);

  return (
    <MoodChoosePageView
      selectedOption={selectedOption}
      handleMoodClick={handleMoodClick}
      handleButtonClick={handleButtonClick}
      currentDateKor={currentDateKor}
      moodQnAArray={moodQnAArray}
    />
  )
}

export default MoodChoosePage
