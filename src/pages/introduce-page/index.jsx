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
    {
      main: '뮤드가 내 감정을 분석하고\n리포트로 제공해요',
      sub: '내 감정 변화 추이와 최애 플리 순위까지\n리포트로 받을 수 있어요',
    },
  ]

  const handleSlideChange = (current, next) => {
    setCurrentSlide(current)
  }

  const handleSkipClick = () => {
    navigateTo(`/home`);
  }

  const handleStartClick = () => {
  }

  const slickSettings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    speed: 500,
    slidesToScroll: 1,
    arrows: false,
    // 슬라이드가 변경될 때마다 호출되는 콜백 함수를 설정합니다.
    afterChange: handleSlideChange,
  }

  const handleClick = () => {
    if (currentSlide != 1) sliderRef.current.slickNext()
    else navigateTo(`/mood/test`);

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
      handleStartClick={handleStartClick}
    ></IntroducePageView>
  )
}

export default IntroducePage
