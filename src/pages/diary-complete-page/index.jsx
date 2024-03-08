import { useEffect, useState } from 'react'
import DiaryCompletePageView from './diary-complete-page'
import { useLocation, useNavigate } from 'react-router-dom'
import { useUserContext } from '../../context/UserContext';
import { Get } from '../../api/axios'
import { useModal } from '../../context/ModalContext'

const DiaryCompletePage = () => {
  const location = useLocation()
  const { state } = location
  const { currentDateKor } = useUserContext();
  const navigateTo = useNavigate();
  const { modalOpen } = useModal();
  const [diary, setDiary] = useState({})

  const handleClick = () => {
    navigateTo('/home');
  }

  const getDiaryAxios = async () => {
    try {
      const response = await Get(`/diaries/${state.diaryId}`)
      if (response.data) {
        setDiary(response.data)
      }
    } catch (error) {
      console.log(error)
      modalOpen({
        content: ('일기 조회에 실패했습니다.'),
      })
    }
  }

  useEffect(() => {
    if (state) {
      getDiaryAxios()
    } else {
      navigateTo('/mood/choose')
    }
  }, [])

  return (
    <DiaryCompletePageView
      currentDateKor={currentDateKor}
      diary={diary}
      handleClick={handleClick}
    />
  )
}

export default DiaryCompletePage
