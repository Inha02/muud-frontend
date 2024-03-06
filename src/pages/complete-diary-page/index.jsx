import { useEffect, useState } from 'react'
import CompleteDiaryPageView from './complete-diary-page'
import { useLocation, useNavigate } from 'react-router-dom'
import { useUserContext } from '../../context/UserContext';


const CompleteDiaryPage = () => {
  const location = useLocation()
  const { state } = location
  const { currentDate } = useUserContext();
  const navigateTo = useNavigate();

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

  useEffect(() => {

  }, [])

  return (
    <CompleteDiaryPageView
      currentDate={currentDate}
      playlist={playlist}
      handleClick={handleClick}
    />
  )
}

export default CompleteDiaryPage
