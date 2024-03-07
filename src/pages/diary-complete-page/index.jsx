import { useEffect, useState } from 'react'
import DiaryCompletePageView from './diary-complete-page'
import { useLocation, useNavigate } from 'react-router-dom'
import { useUserContext } from '../../context/UserContext';
import { Get } from '../../api/axios'


const DiaryCompletePage = () => {
  const location = useLocation()
  const { state } = location
  const { currentDateKor } = useUserContext();
  const navigateTo = useNavigate();

  const [diary, setDiary] = useState({})

  const handleClick = () => {
    navigateTo('/home');
  }

  const getDiaryAxios = async () => {
    try {
      const response = await Get(`/diaries/${state.diaryId}`)
      console.log(response.data)
      if (response.data) {
        setDiary(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (state) {
      console.log("감정결과 아이디" + state.diaryId)
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
