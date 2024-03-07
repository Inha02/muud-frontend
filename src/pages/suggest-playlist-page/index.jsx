import { useEffect, useState, useContext, useRef } from 'react'
import SuggestPlaylistPageView from './suggest-playlist-page'
import { Get, Post, clearConfig, setConfig } from '../../api/axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { useModal } from '../../context/ModalContext'
import { playList } from '../../constants/testData'
import moment from 'moment';


const SuggestPlaylistPage = () => {
  const location = useLocation()
  const { state } = location
  const navigateTo = useNavigate()
  const { modalOpen } = useModal()
  const sliderRef = useRef(null)
  const [cookies, setCookie] = useCookies([
    'accessToken',
    'refreshToken',
    'id',
    'nickname',
  ])
  const [isRecordActive, setIsRecordActive] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  //const [mood, setMood] = useState('')
  const [selectedOption, setSelectedOption] = useState([
    false,
    false,
    false,
    false,
  ])
  const userInfo = {
    id: cookies.id,
    nickname: cookies.nickname,
  }
  const [playlistArr, setPlaylistArr] = useState(playList)
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
    afterChange: (current, next) => {
      setCurrentSlide(current)
    },
    className: 'center',
  }
  //const noCORS = 'https://cors-anywhere.herokuapp.com/';

  const handleOptionChange = (event, index) => {
    const newValue = [false, false, false, false]
    newValue[index] = !selectedOption[index]
    setSelectedOption(newValue)
    setIsRecordActive(!selectedOption[index])
  }

  const handleRecord = () => {
    postDiaryAxios()
  }

  const getPliAxios = async () => {
    try {
      const response = await Get(`/playlists?emotion=${state.mood}`)
      const { content } = response.data
      console.log(content)
      if (content && content.length != 0) {
        setPlaylistArr(content)
      }
    } catch (error) {
      console.log(error)
      setPlaylistArr(playList)
    }
  }

  const postDiaryAxios = async () => {
    try {
      const formData = new FormData()
      formData.append('content', state.diary)
      formData.append('emotionName', state.mood)
      formData.append('playlistId', parseInt(playlistArr[currentSlide].id))
      formData.append('referenceDate', state.date)
      setConfig('multipart/form-data')
      const response = await Post('/diaries', formData)
      clearConfig('Content-Type')
      navigateTo(`/diary/complete`, {
        state: { diaryId: response.data }
      })
    } catch (error) {
      modalOpen({
        content: ('일기 작성에 실패했습니다'),
      })
    }
  }

  useEffect(() => {
    //setMood(state.mood)
    if (state) console.log(state.diary + ' ' + state.mood + ' ' + state.date)
    getPliAxios()
  }, [])

  return (
    <SuggestPlaylistPageView
      playlistArr={playlistArr}
      userInfo={userInfo}
      slickSettings={slickSettings}
      sliderRef={sliderRef}
      currentSlide={currentSlide}
      handleOptionChange={handleOptionChange}
      selectedOption={selectedOption}
      isRecordActive={isRecordActive}
      handleRecord={handleRecord}
      mood={state.mood}
    />
  )
}

export default SuggestPlaylistPage
