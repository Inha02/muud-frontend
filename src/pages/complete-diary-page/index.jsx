import { useEffect, useState, useContext, useRef } from 'react'
import CompleteDiaryPageView from './complete-diary-page'
import { Get } from '../../api/axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { useUserContext } from '../../context/UserContext';


const CompleteDiaryPage = () => {
  const location = useLocation()
  const { state } = location
  const { currentDate } = useUserContext();

  const [cookies, setCookie, removeCookie] = useCookies([
    'accessToken',
    'refreshToken',
    'id',
    'nickname',
  ])
  const [playlist, setPlaylist] = useState(
    {
      title: '제목',
      videoId: 'JUzPQ0JalHE',
      channel: '뮤플리',
      tags: ['태그1', '태그2'],
    }
  )
  const [playing, setPlaying] = useState(false)
  const [mood, setMood] = useState('')
  const userInfo = {
    id: cookies.id,
    nickname: cookies.nickname,
  }



  const playlistVideoIds = ['3TNm2tLw88A?si=vrfnDGY8zrhn4ARt', 'JUzPQ0JalHE']
  //const noCORS = 'https://cors-anywhere.herokuapp.com/';

  const handleRecord = () => { }


  useEffect(() => {
    if (state) {
      setMood(state)
    }
  }, [])

  function onPlayerReady(event) {
    const player = document.getElementById('player')
    //player.setVolume(0);
    var playButton = document.getElementById('play-button')
    playButton.addEventListener('click', function () {
      player.playVideo()
    })
    var pauseButton = document.getElementById('pause-button')
    pauseButton.addEventListener('click', function () {
      player.pauseVideo()
    })
  }

  return (
    <CompleteDiaryPageView
      currentDate={currentDate}
      playlist={playlist}
      userInfo={userInfo}
      playing={playing}
      setPlaying={setPlaying}
      handleRecord={handleRecord}
      mood={mood}
    />
  )
}

export default CompleteDiaryPage
