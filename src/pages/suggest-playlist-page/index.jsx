import { useEffect, useState, useContext, useRef } from 'react'
import SuggestPlaylistPageView from './suggest-playlist-page'
import { Get } from '../../api/axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

const SuggestPlaylistPage = () => {
  const location = useLocation()
  const { state } = location
  const [cookies, setCookie, removeCookie] = useCookies([
    'accessToken',
    'refreshToken',
    'id',
    'nickname',
  ])
  const [playlistArr, setPlaylistArr] = useState([
    {
      title: '제목',
      videoId: 'JUzPQ0JalHE',
      channelName
        : '뮤플리',
      tags: ['태그1', '태그2'],
    },
    {
      title:
        '[Playlist] 아니, 이런 노래는 어떻게 아는거야?? 너무 좋자나... | 노래 좀 듣는 애 플레이리스트😎ㅣShe has good taste...',
      videoId: '3TNm2tLw88A?si=vrfnDGY8zrhn4ARt',
      channelName
        : '레이백 ʟᴀʏʙᴀᴄᴋ',
      tags: ['봄노래', '플레이리스트', 'playlist'],
    },
  ])
  const [playing, setPlaying] = useState(false)
  const [isRecordActive, setIsRecordActive] = useState(false)
  const [selectedOption, setSelectedOption] = useState([
    false,
    false,
    false,
    false,
  ])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mood, setMood] = useState('')
  const sliderRef = useRef(null)
  const userInfo = {
    id: cookies.id,
    nickname: cookies.nickname,
  }

  const handleSlideChange = (current, next) => {
    setCurrentSlide(current)
  }

  const handleOptionChange = (event, index) => {
    console.log('클릭' + index + selectedOption)
    const newValue = [false, false, false, false]
    newValue[index] = !selectedOption[index]
    setSelectedOption(newValue)
    setIsRecordActive(!selectedOption[index])
  }

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '25px',
    slidesToShow: 1,
    // 슬라이드가 변경될 때마다 호출되는 콜백 함수를 설정합니다.
    afterChange: handleSlideChange,
    className: 'center',
  }

  const playlistVideoIds = ['3TNm2tLw88A?si=vrfnDGY8zrhn4ARt', 'JUzPQ0JalHE']
  //const noCORS = 'https://cors-anywhere.herokuapp.com/';
  const playerRef = useRef(null)

  const handleRecord = () => { }

  const getPliAxios = async () => {
    try {
      const response = await Get(`/playlists?emotion=${state}`)

      const { content } = response
      console.log(content)

      if (content.length != 0) {
        setPlaylistArr(content)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    if (state) {
      setMood(state)
    }
    getPliAxios()
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
    <SuggestPlaylistPageView
      playlistArr={playlistArr}
      userInfo={userInfo}
      playlistVideoIds={playlistVideoIds}
      playing={playing}
      setPlaying={setPlaying}
      slickSettings={slickSettings}
      sliderRef={sliderRef}
      currentSlide={currentSlide}
      handleOptionChange={handleOptionChange}
      selectedOption={selectedOption}
      isRecordActive={isRecordActive}
      handleRecord={handleRecord}
      mood={mood}
    />
  )
}

export default SuggestPlaylistPage
