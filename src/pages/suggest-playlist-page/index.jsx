import { useEffect, useState, useRef } from 'react'
import SuggestPlaylistPageView from './suggest-playlist-page'
import { Get, Post, removeConfig, setConfig } from '../../api/axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { useModal } from '../../context/ModalContext'
import { playList } from '../../constants/testData'
import { useUserContext } from '../../context/UserContext'

const SuggestPlaylistPage = () => {
  const location = useLocation()
  const { state } = location
  const navigateTo = useNavigate()
  const { currentDate } = useUserContext();
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
  const [mood, setMood] = useState('')
  const [selectedOption, setSelectedOption] = useState([
    false,
    false,
    false,
    false,
  ])
  const nickname = cookies.nickname ? cookies.nickname : '뮤디';
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
      if (content && content.length != 0) {
        setPlaylistArr(content)
      }
    } catch (error) {
      console.log(error)
      modalOpen({
        content: ('추천 플레이리스트 요청에 실패했습니다.'),
      })
      setPlaylistArr(playList)
    }
  }

  const postDiaryAxios = async () => {
    try {
      const formData = new FormData()
      const id = parseInt(playlistArr[currentSlide].id)
      const date = currentDate.format('yyyy-MM-DD')
      if (!(id && date && state.mood)) { throw new Error(); }
      setConfig({ contentType: 'multipart/form-data' })
      formData.append('content', state.diary)
      formData.append('playlistId', id)
      formData.append('referenceDate', date)
      formData.append('emotionName', state.mood)
      const response = await Post('/diaries', formData)
      removeConfig('Content-Type')
      navigateTo(`/diary/complete`, {
        state: { diaryId: response.data }
      })
    } catch (error) {
      console.log(error)
      modalOpen({
        content: ('일기 작성에 실패했습니다'),
      })
    }
  }

  useEffect(() => {
    if (state) {
      setMood(state.mood)
      getPliAxios()
    }
    else {
      navigateTo('/mood/choose')
    }
  }, [])

  return (
    <SuggestPlaylistPageView
      playlistArr={playlistArr}
      nickname={nickname}
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
