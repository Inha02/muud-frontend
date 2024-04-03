
import MusicPlayer from "../../components/MusicPlayer";
import RoundButton from '../../components/common/RoundButton';
import CheckBox from '../../components/common/CheckBox';
import EllipsizedText from '../../components/common/EllipsizedText';
import { getMoodData } from "../../utils";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './slider.css'
import styles from './suggest-playlist-page.module.css';

const SuggestPlaylistPageView = ({
  slickSettings, sliderRef, currentSlide,
  nickname,
  playlistArr,
  selectedOption,
  handleOptionChange,
  isRecordActive,
  handleRecord,
  mood
}) => {

  return (
    <>
      {mood && (<img className={styles.moodEmojiSmall} src={getMoodData(mood).emoji} alt='emotion' />)}
      <div className={styles.textPlylist}>{nickname}님을 위한 플레이리스트</div>
      <div className={styles.textDescription}>마음에 드는 플리를 선택해서 감정과 함께 저장해보세요</div>
      <div className='mTopES'>
        <Slider
          className={styles.slider}
          {...slickSettings}
          ref={sliderRef}
        >
          {playlistArr && playlistArr.map((content, index) => (
            <div key={index}>
              <div className={styles.cardContainer + ' ' + (selectedOption[index] && styles.checked) + ' ' + (currentSlide != index && styles.sideSlide)}>
                <MusicPlayer video={content.videoId} />
                <div className={styles.pliContentWrap}>
                  <div className={styles.textChannelName}>{content.channelName
                  }</div>
                  <EllipsizedText text={content.title} className={styles.textTitle} maxHeight={100}></EllipsizedText>
                  <EllipsizedText className={styles.textTags} maxHeight={10} text={content.tags && content.tags.map((item) => (<span key={item} >#{item} </span>))}></EllipsizedText>
                  <div className={styles.checkBox}>
                    <CheckBox index={index} value={index} isChecked={selectedOption[index]} handleCheckboxChange={handleOptionChange}></CheckBox>
                  </div>
                </div>
              </div>
            </div>
          )
          )}
        </Slider >
      </div >
      <div className={styles.btn}>
        <RoundButton onClick={handleRecord} active={isRecordActive} bottom>기록하기</RoundButton>
      </div>
    </ >
  )
}

export default SuggestPlaylistPageView
