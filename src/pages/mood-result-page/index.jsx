import { useEffect, useState, useContext, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import MoodResultPageView from './mood-result-page'
import { Get, Post } from '../../api/axios';

const MoodResultPage = () => {
  const location = useLocation();
  const { state } = location;
  const { currentDate } = useUserContext();
  const [text, setText] = useState('');
  const [isBtnActive, setIsBtnActive] = useState(false);
  const [moodResultData, setMoodResultData] = useState({});

  const navigateTo = useNavigate();
  const maxLength = 200;
  const enteredChars = text.length;

  const handleSkipClick = () => {
    navigateTo('/playlist');
  }

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue !== '') {
      setIsBtnActive(true)
    } else {
      setIsBtnActive(false)
    }
    if (inputValue.length > maxLength) {
      return
    }
    setText(inputValue);
  };

  const handleRightClick = () => {
    navigateTo('/playlist');
  }

  const postDiaryAxios = async (mood) => {
    try {
      const response = await Post('/diaries', { content: '', emotionName: '' });

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getMoodAxios = async (mood) => {
    try {
      const response = await Get('emotions/' + mood);
      setMoodResultData(response);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (state) {
      console.log(state);
      getMoodAxios('EMOTION1');
    }
  }, []);

  return (
    <MoodResultPageView currentDate={currentDate} handleChange={handleChange} handleSkipClick={handleSkipClick} handleRightClick={handleRightClick} enteredChars={enteredChars} maxLength={maxLength} isRightBtnActive={isBtnActive} moodResultData={moodResultData} />
  )
}

export default MoodResultPage
