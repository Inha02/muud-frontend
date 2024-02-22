import { useEffect, useState, useContext, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import MoodResultPageView from './mood-result-page'


const MoodResultPage = () => {
  const location = useLocation();
  const { state } = location;
  const { currentDate } = useContext(UserContext);
  const [text, setText] = useState('');
  const [isBtnActive, setIsBtnActive] = useState(false);
  const navigateTo = useNavigate();

  const maxLength = 200;
  const enteredChars = text.length;

  if (state) {
    console.log('전달된 데이터:', state);
  }

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

  return (
    <MoodResultPageView currentDate={currentDate} handleChange={handleChange} handleSkipClick={handleSkipClick} handleRightClick={handleRightClick} enteredChars={enteredChars} maxLength={maxLength} isRightBtnActive={isBtnActive} />
  )
}

export default MoodResultPage
