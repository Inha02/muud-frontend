import { useEffect, useState, useContext, useRef } from 'react'
import { useUserContext } from '../../context/UserContext';
import SuggestPlaylistPageView from './suggest-playlist-page'
import axios from 'axios';
import { getMoodImg } from '../../utils'

const SuggestPlaylistPage = () => {
  const [pliArr, setPliArr] = useState([{ title: '제목', videoId: 'JUzPQ0JalHE', channel: '뮤플리', tags: ['태그1', '태그2'] }, { title: '[Playlist] 아니, 이런 노래는 어떻게 아는거야?? 너무 좋자나... | 노래 좀 듣는 애 플레이리스트😎ㅣShe has good taste...', videoId: '3TNm2tLw88A?si=vrfnDGY8zrhn4ARt', channel: '레이백 ʟᴀʏʙᴀᴄᴋ', tags: ['봄노래', '플레이리스트', 'playlist'] }])
  const { authInfo } = useUserContext();
  const API_KEY = import.meta.env.VITE_YOUTUBE_KEY
  const searchKeyword = '행복';
  const [topPlaylists, setTopPlaylists] = useState([]);
  const [videos, setVideos] = useState([]);
  const [playing, setPlaying] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef(null)

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
    centerPadding: "25px",
  slidesToShow: 1,
    // 슬라이드가 변경될 때마다 호출되는 콜백 함수를 설정합니다.
    afterChange: handleSlideChange,
    className: "center",

  }

  const playlistVideoIds = ['3TNm2tLw88A?si=vrfnDGY8zrhn4ARt', 'JUzPQ0JalHE'];
  //const noCORS = 'https://cors-anywhere.herokuapp.com/';
  const playerRef = useRef(null);



  useEffect(() => {
    /*
    추천 로직 :
    키워드 - '행복'
    필터링 - 음악, 재생목록
    정렬 - 조회순 
    최대 - 4개
    - 이전 추천과 겹치지 않도록 주의해야함
    - 4개를 충족하지 못할 경우에도 꼭 4개가 될 수 있도록
    */

  }, []);



  // // 동영상이 종료되면 호출되는 콜백 함수
  // const onEnd = () => {
  //   // 다음 동영상으로 이동
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % playlistVideoIds.length)
  // }

  function onPlayerReady(event) {
    const player = document.getElementById('player');
    //player.setVolume(0);
    var playButton = document.getElementById("play-button");
    playButton.addEventListener("click", function () { player.playVideo(); });
    var pauseButton = document.getElementById("pause-button");
    pauseButton.addEventListener("click", function () { player.pauseVideo(); });
  }


  return (
    <SuggestPlaylistPageView
      pliArr={pliArr}
      authInfo={authInfo}
      playlistVideoIds={playlistVideoIds}
      topPlaylists={topPlaylists}
      playing={playing}
      setPlaying={setPlaying}
      slickSettings={slickSettings}
      sliderRef={sliderRef}
      currentSlide={currentSlide}
    />
  )
}

export default SuggestPlaylistPage
