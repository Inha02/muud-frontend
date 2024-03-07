import { useEffect, useState, useContext, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import MoodResultPageView from './mood-result-page'
import { Get, Post } from '../../api/axios';
import { getMoodData } from '../../utils';
import moment from 'moment';

const MoodResultPage = () => {
  const location = useLocation();
  const { state } = location;
  const [mood, setMood] = useState('');
  const { currentDateKor, currentDate } = useUserContext();
  const [text, setText] = useState('');
  const [isBtnActive, setIsBtnActive] = useState(false);
  const [moodData, setMoodData] = useState({});

  const navigateTo = useNavigate();
  const maxLength = 200;
  const enteredChars = text.length;

  const handleSkipClick = () => {
    navigateTo(`/playlist`, {
      state: { mood: mood, diary: '' }
    });
  }

  const handleRightClick = () => {
    navigateTo(`/playlist`, {
      state: { mood: mood, diary: text }
    });
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

  const getMoodAxios = async (mood) => {
    try {
      const response = await Get('emotions/' + mood);
      setMoodData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    //const params = new URL(document.URL).searchParams;
    //setMood(params.get("mood"));
    setMood(state)
  }, []);

  useEffect(() => {
    if (mood) {
      setMoodData(getMoodData(mood));
      //getMoodAxios(mood);
    }
  }, [mood]);

  return (
    <MoodResultPageView currentDateKor={currentDateKor} handleChange={handleChange} handleSkipClick={handleSkipClick} handleRightClick={handleRightClick} enteredChars={enteredChars} maxLength={maxLength} isRightBtnActive={isBtnActive} moodData={moodData} />
  )
}

export default MoodResultPage
