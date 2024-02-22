import { useEffect, useState, useContext, useRef } from 'react'
import Slider from "react-slick";
import RoundButton from '../../components/common/RoundButton'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './slider.css'
import styles from './introduce-page.module.css'

/* 카드 컴포넌트 */
const SlideCard = ({ index }) => {
  return (
    <div className={styles.cardContainer}>
      <h3>{index}</h3>
    </div>
  )
}

const IntroducePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mainTxt, setMainTxt] = useState('')
  const [subTxt, setSubTxt] = useState('')
  const sliderRef = useRef(null)

  const handleClick = () => {
    if (currentSlide != 1)
      sliderRef.current.slickNext()
  }

  const handleSlideChange = (current, next) => {
    setCurrentSlide(current)
    switch (current) {
      case 1:
        setMainTxt('뮤드가 내 감정을 분석하고\n리포트로 제공해요')
        setSubTxt(
          '내 감정 변화 추이와 최애 플리 순위까지\n리포트로 받을 수 있어요'
        )
        break
      default:
        setMainTxt('오늘부터 뮤드와 함께\n나의 감정을 음악으로 기록해보세요')
        setSubTxt(
          '뮤드는 지금 내 감정과 가장 잘 어울리는\n음악 플레이리스트를 추천해줍니다'
        )
        break
    }
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

  useEffect(() => {
    handleSlideChange();
  }, []);


  return (
    <div className='appContainer back'>
      <div >{mainTxt}</div>
      <div >{subTxt}</div>

      <div>
        <Slider
          {...slickSettings}
          ref={sliderRef}
        >
          <div>
            <SlideCard index={0}></SlideCard>
          </div>
          <div>
            <SlideCard index={1}></SlideCard>
          </div>
        </Slider>
      </div>

      {currentSlide != 1 && (
        <div>
          <a >건너뛰기</a>
        </div>
      )}
      <RoundButton
        onClick={handleClick}
        active
      >
        {currentSlide != 1 ? '다음' : '시작하기'}
      </RoundButton>
    </div>
  )
}

export default IntroducePage
