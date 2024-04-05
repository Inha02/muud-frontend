import { useEffect, useState } from 'react'
import DiaryCompletePageView from './diary-complete-page'
import { useLocation, useNavigate } from 'react-router-dom'
import { useUserContext } from '../../context/UserContext';
import { Get } from '../../api/axios'
import { useModal } from '../../context/ModalContext'
import { getCurrentDateKor } from '../../utils'

const DiaryCompletePage = () => {
  const location = useLocation()
  const { state } = location
  const { currentDate } = useUserContext();
  const navigateTo = useNavigate();
  const { modalOpen } = useModal();
  const [diary, setDiary] = useState({})

  const handleClick = () => {
    if (localStorage.getItem('isAuthenticated') === 'true') {
      navigateTo('/home');
    } else {
      modalOpen({
        content: ('로그인이 필요합니다.\n로그인 하시겠습니까?'),
        type: 'okCancle',
        handle: () => navigateTo('/login', { replace: true }),
      })
    }

  }

  const getDiaryAxios = async () => {
    try {
      const response = await Get(`/diaries/${state.diaryId}`)
      setDiary(response.data)
    } catch (error) {
      console.log(error)
      modalOpen({
        content: ('일기 조회에 실패했습니다.'),
      })
    }
  }

  useEffect(() => {
    if (state) {
      if (localStorage.getItem('isAuthenticated') === 'true') {
        getDiaryAxios()
      } else {
        setDiary(state)
      }
    } else {
      navigateTo('/mood/choose')
    }
  }, [])

  return (
    <DiaryCompletePageView
      currentDateKor={getCurrentDateKor(currentDate)}
      diary={diary}
      handleClick={handleClick}
    />
  )
}

export default DiaryCompletePage
