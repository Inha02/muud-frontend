import { useEffect, useState, useContext, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import DiaryDetailPageView from './diary-detail-page'
import { Get, Post } from '../../api/axios';
import { getMoodData } from '../../utils';
import moment from 'moment';
import { useModal } from '../../context/ModalContext';

const DiaryDetailPage = () => {
  //const [mood, setMood] = useState('');
  const { currentDateKor, currentDate } = useUserContext();
  const { modalOpen } = useModal();
  const [text, setText] = useState('');
  const [isBtnActive, setIsBtnActive] = useState(false);
  const [moodData, setMoodData] = useState({});
  const [diary, setDiary] = useState(
    {
      "date": '2024-03-02',
      "diaryId": 1,
      "content": "안녕하세요안녕하세요",
      "emotion": {
        "titleEmotion": "우울",
        "combinedName": "우르르 쾅쾅",
        "description": "마음을 쾅쾅 두드리는 화가 가득해요",
        "tags": [
          "분노",
          "짜증",
          "극대노"
        ]
      },
      "createdDate": "2024-02-24T15:10:41.96862",
      "updatedDate": "2024-02-24T15:10:41.96862",
      "playlist": {
        "title": "제목",
        "videoId": "JUzPQ0JalHE",
      }
    }
  )
  const navigateTo = useNavigate();
  const maxLength = 200;
  const enteredChars = text.length;

  const handleLeftClick = () => {
    navigateTo(`/home`);
  }

  const handleRightClick = () => {

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

  const getDiaryAxios = async (diaryId) => {
    try {
      const response = await Get(`/diaries/${diaryId}`)
      console.log(response.data)
      if (response.data) {
        setDiary(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    //const params = new URL(document.URL).searchParams;
    //setMood(params.get("mood"));
  }, []);

  useEffect(() => {
    const params = new URL(document.URL).searchParams.get("id");
    getDiaryAxios(params)
    //setMood(params.get("mood"));
  }, []);

  return (
    <DiaryDetailPageView diary={diary} currentDateKor={currentDateKor} handleChange={handleChange} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} enteredChars={enteredChars} maxLength={maxLength} isRightBtnActive={isBtnActive} />
  )
}

export default DiaryDetailPage
