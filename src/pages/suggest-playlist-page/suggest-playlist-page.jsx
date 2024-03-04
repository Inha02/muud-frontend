import MusicPlayer from "../../components/MusicPlayer";
import { useEffect, useState, useContext, useRef } from 'react'

import RoundButton from '../../components/common/RoundButton';
import CheckBox from '../../components/common/CheckBox';

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './slider.css'
//import styles from '../../components/MusicPlayer/MusicPlayer.module.css'; // CSS 모듈 임포트
import styles from './suggest-playlist-page.module.css'; // CSS 모듈 임포트
import { getMoodData } from "../../utils";

/* 플리 카드 컴포넌트 */
const SlideCard = ({ content, children }) => {
  return (
    <div className={styles.cardContainer}>

    </div>
  )
}

const SuggestPlaylistPageView = ({
  playlistVideoIds,
  playing,
  setPlaying,
  slickSettings, sliderRef, currentSlide,
  userInfo,
  playlistArr,
  selectedOption,
  handleOptionChange,
  isRecordActive,
  handleRecord,
  mood
}) => {



  return (
    <>
      {mood && (<img className={styles.moodEmojiSmall} src={getMoodData(mood).emoji} alt='emotion' />)

      }
      <div>{userInfo.nickname}님을 위한 플레이리스트</div>
      <div>마음에 드는 플리를 선택해서 감정과 함께 저장해보세요</div>

      <div>
        <Slider
          className={styles.slider}
          {...slickSettings}
          ref={sliderRef}
        >
          {playlistArr.map((content, index) => {
            return (<div key={index}>
              <div className={styles.cardContainer + ' ' + (selectedOption[index] && styles.checked) + ' ' + (currentSlide != index && styles.sideSlide)}>
                <MusicPlayer video={content.videoId} />
                <div className={styles.pliContentWrap}>
                  <div >{content.channelName
                  }</div>
                  <div >{content.title}</div>
                  <div>
                    {content.tags && content.tags.map((item) => (<span key={item} >#{item}</span>))}
                  </div>
                  <CheckBox index={index} value={index} isChecked={selectedOption[index]} handleCheckboxChange={handleOptionChange}></CheckBox>
                </div>

              </div>
            </div>
            )
          })}
        </Slider>
      </div>

      <RoundButton onClick={handleRecord} active={isRecordActive}>기록하기</RoundButton>
    </ >
  )
}

export default SuggestPlaylistPageView
