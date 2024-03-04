import { useEffect, useState, useContext, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import MoodResultPageView from './mood-result-page'
import { Get, Post } from '../../api/axios';
import { getMoodData } from '../../utils';

const MoodResultPage = () => {
  const location = useLocation();
  const [mood, setMood] = useState('');
  const { state } = location;
  const { currentDate } = useUserContext();
  const [text, setText] = useState('');
  const [isBtnActive, setIsBtnActive] = useState(false);
  const [moodResultData, setMoodResultData] = useState({});

  const navigateTo = useNavigate();
  const maxLength = 200;
  const enteredChars = text.length;

  const handleSkipClick = () => {
    postDiaryAxios('');

  }

  const handleRightClick = () => {
    postDiaryAxios(text);

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

  const postDiaryAxios = async (content) => {
    try {
      const response = await Post('/diaries', { content: content, emotionName: mood, playlistId: '' });
      navigateTo(`/playlist`, {
        state: mood
      });
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
    const params = new URL(document.URL).searchParams;
    setMood(params.get("mood"));
  }, []);

  useEffect(() => {
    if (mood) {
      setMoodResultData(getMoodData(mood));
      //getMoodAxios(mood);
    }
  }, [mood]);

  return (
    <MoodResultPageView currentDate={currentDate} handleChange={handleChange} handleSkipClick={handleSkipClick} handleRightClick={handleRightClick} enteredChars={enteredChars} maxLength={maxLength} isRightBtnActive={isBtnActive} moodResultData={moodResultData} />
  )
}

export default MoodResultPage
