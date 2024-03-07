import { useEffect, useState } from 'react'
import CompleteDiaryPageView from './complete-diary-page'
import { useLocation, useNavigate } from 'react-router-dom'
import { useUserContext } from '../../context/UserContext';
import { Get } from '../../api/axios'


const CompleteDiaryPage = () => {
  const location = useLocation()
  const { state } = location
  const { currentDateKor } = useUserContext();
  const navigateTo = useNavigate();

  const [diary, setDiary] = useState(
    {
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
      "createdDate": "2024-02-23T17:54:48.70075",
      "updatedDate": "2024-02-23T17:54:48.70075"
    }
  )
  const [playlist, setPlaylist] = useState(
    {
      title: '제목',
      videoId: 'JUzPQ0JalHE',
      channel: '뮤플리',
      tags: ['태그1', '태그2'],
    }
  )

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
    }
  }, [])

  return (
    <CompleteDiaryPageView
      currentDateKor={currentDateKor}
      diary={diary}
      playlist={playlist}
      handleClick={handleClick}
    />
  )
}

export default CompleteDiaryPage
