import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import RoundButton from '../../components/common/RoundButton'
import styles from './introduce-page.module.css'

/* 카드 컴포넌트 */
const SlideCard = ({ content }) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.main}>{content.main}</div>
            <div className={styles.sub}>{content.sub}</div>
            <div className={styles.imageContainer}>
                <img src="public\images\Rectangle 92.png" />
            </div>
        </div>
    )
}

const IntroducePageView = ({ slickSettings, sliderRef, currentSlide, handleClick, moodArray, handleSkipClick, handleStartClick }) => {
    return (
        <div className='appContainer topbar'>
            <div>
                <Slider
                    {...slickSettings}
                    ref={sliderRef}
                >
                    <div>
                        <SlideCard content={moodArray[0]}></SlideCard>
                    </div>
                    <div>
                        <SlideCard content={moodArray[1]}></SlideCard>
                    </div>
                </Slider>
            </div>


            {currentSlide != 1 && (
                <div className={styles.skip}>
                    <a onClick={handleSkipClick}>건너뛰기</a>
                </div>
            )}
            <div className={styles.btn}>
                <RoundButton
                    onClick={handleClick}
                    active
                >
                    {currentSlide != 1 ? '다음' : '시작하기'}
                </RoundButton>
            </div>

        </div>
    )
}
export default IntroducePageView