import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import DiaryDetailPageView from './diary-detail-page'
import { Get, Put, be } from '../../api/axios';
import { useModal } from '../../context/ModalContext';

const DiaryDetailPage = () => {
  const { currentDateKor } = useUserContext();
  const { modalOpen } = useModal();
  const [text, setText] = useState('');
  const [isBtnActive, setIsBtnActive] = useState(false);
  const [diary, setDiary] = useState({})
  const navigateTo = useNavigate();
  const maxLength = 200;
  const enteredChars = text.length;
  const [initialText, setInitialText] = useState('');

  const handleLeftClick = () => {
    navigateTo(`/home`);
  }

  const handleRightClick = () => {
    editDiaryAxios()
  }

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length > maxLength) {
      return
    }
    if (initialText == inputValue || inputValue == "") {
      setIsBtnActive(false)
    } else {
      setIsBtnActive(true)
    }
    setText(inputValue);
  };

  const getDiaryAxios = async (diaryId) => {
    try {
      const response = await Get(`/diaries/${diaryId}`)
      const data = response.data
      if (data) {
        setInitialText(data.content)
        setDiary(data)
        setText(data.content ? data.content : '')
      }
    } catch (error) {
      console.log(error)
      modalOpen({
        content: ('일기 조회에 실패했습니다.'),
        handle: navigateTo('/home', { replace: true }),
      })
    }
  }

  const editDiaryAxios = async () => {
    try {
      await Put(`/diaries/${diary.id}`, {
        content: text
      })
      modalOpen({
        content: '수정 완료되었습니다',
        handle: navigateTo('/home', { replace: true }),
      });
    } catch (error) {
      console.log(error)
      modalOpen({
        content: '수정 오류가 발생했습니다',
        handle: navigateTo('/home', { replace: true }),
      });
    }
  }

  useEffect(() => {
    const diaryId = new URL(document.URL).searchParams.get("id");
    if (diaryId) {
      getDiaryAxios(diaryId)
    } else {
      navigateTo('/home')
    }
  }, []);

  return (
    <DiaryDetailPageView diary={diary} currentDateKor={currentDateKor} handleChange={handleChange} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} enteredChars={enteredChars} maxLength={maxLength} isRightBtnActive={isBtnActive} text={text} />
  )
}

export default DiaryDetailPage
