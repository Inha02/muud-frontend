import { useEffect, useState, useContext, useRef } from 'react'
import SuggestPlaylistPageView from './suggest-playlist-page'
import { Get, Post } from '../../api/axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { useModal } from '../../context/ModalContext';
import { playList } from '../../constants/testData'

const SuggestPlaylistPage = () => {
  const location = useLocation()
  const navigateTo = useNavigate();
  const { state, diary } = location
  const { modalOpen } = useModal();
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
  const userInfo = {
    id: cookies.id,
    nickname: cookies.nickname,
  }
  const [playlistArr, setPlaylistArr] = useState(playList)
  const handleSlideChange = (current, next) => {

    setCurrentSlide(current)

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
  //const noCORS = 'https://cors-anywhere.herokuapp.com/';

  const handleOptionChange = (event, index) => {
    const newValue = [false, false, false, false]
    newValue[index] = !selectedOption[index]
    setSelectedOption(newValue)
    setIsRecordActive(!selectedOption[index])
    //console.log('현재 선택 영상' + playlistArr[currentSlide].title)
  }





  const handleRecord = () => {
    postDiaryAxios();
  }

  const getPliAxios = async () => {
    try {
      const response = await Get(`/playlists?emotion=${state}`)
      const { content } = response
      //console.log(content)
      if (content.length != 0) {
        setPlaylistArr(content)
      }
    } catch (error) {
      console.log(error)
      setPlaylistArr(playList)
      modalOpen({
        content: '유튜브 데이터 가져오기 실패',
      });

    }
  }

  const postDiaryAxios = async () => {
    try {
      const response = await Post('/diaries', { content: diary, emotionName: mood, playlistId: playlistArr[currentSlide].videoId });
      // const { diaryId } = response.data
      console.log(response.headers)
      console.log(response.data.headers['location']);
      console.log(response.data.headers.get('location'));

      //  const loc = response.headers.location;
      //  const diaryId = loc.replace("/diaries/", "");

      // console.log(diaryId)

      navigateTo(`/diary/complete`, {
        //  diaryId: diaryId
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    setMood(state)
    // getPliAxios()
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
      mood={mood}
    />
  )
}

export default SuggestPlaylistPage
