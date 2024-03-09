import { useEffect, useState, useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import IntroducePageView from './introduce-page'

const IntroducePage = () => {
  const navigateTo = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef(null)
  const moodArray = [
    {
      main: '오늘부터 뮤드와 함께\n나의 감정을 음악으로 기록해보세요',
      sub: '뮤드는 지금 내 감정과 가장 잘 어울리는\n음악 플레이리스트를 추천해줍니다',
    },
  ]

  const handleSlideChange = (current, next) => {
    setCurrentSlide(current)
  }

  const handleSkipClick = () => {
    navigateTo(`/home`);
  }

  const slickSettings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    speed: 500,
    slidesToScroll: 1,
    arrows: false,
    // 슬라이드가 변경될 때마다 호출되는 콜백 함수를 설정합니다.
    afterChange: handleSlideChange,
  }

  const handleClick = () => {
    // if (currentSlide != 1) sliderRef.current.slickNext()
    // else navigateTo(`/mood/choose`);
    navigateTo(`/mood/choose`);
  }

  useEffect(() => {
    handleSlideChange()
  }, [])

  return (
    <IntroducePageView
      slickSettings={slickSettings}
      sliderRef={sliderRef}
      handleClick={handleClick}
      currentSlide={currentSlide}
      moodArray={moodArray}
      handleSkipClick={handleSkipClick}
    ></IntroducePageView>
  )
}

export default IntroducePage
