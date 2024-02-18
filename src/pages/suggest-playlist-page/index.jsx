import { useEffect, useState } from 'react'
import SuggestPlaylistPageView from './suggest-playlist-page'
import axios from 'axios';
import YouTube from 'react-youtube'
//import { Get } from "../../api/axios";

const SuggestPlaylistPage = () => {
  const API_KEY = import.meta.env.VITE_YOUTUBE_KEY
  const searchKeyword = '행복';
  const [topPlaylists, setTopPlaylists] = useState([]);
  const [videos, setVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 재생 중인 동영상의 인덱스
  const playlistVideoIds = ['3TNm2tLw88A?si=vrfnDGY8zrhn4ARt', 'JUzPQ0JalHE'];
  //const noCORS = 'https://cors-anywhere.herokuapp.com/';

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

  const getTopPlayList = () => {
    const fetchData = async () => {
      try {
        // 재생목록 정보를 저장할 배열
        const playlistData = [];

        // 특정 키워드로 재생목록 검색
        const searchResponse = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            part: 'snippet',
            q: `${searchKeyword} 음악 happy music`,
            type: 'playlist',
            maxResults: 2,
            order: 'viewCount',
            key: API_KEY,
          },
        });

        // 검색 결과에서 재생목록이 없을 경우 처리
        if (!searchResponse.data.items || searchResponse.data.items.length === 0) {
          console.log('No playlists found.');
          return;
        }

        // 검색 결과에서 재생목록의 ID 및 정보 가져오기
        // for (const item of searchResponse.data.items) {
        // const playlistId = item.id.playlistId;

        const playlistIdArr = ['PLH6x0H3ApZhW5IAbPG5BtR2Qx-ptpgcg2', 'RDCLAK5uy_kaFuGGpmf4HeJUWDpmMSh0JXobEOOR35Q',]
        for (const item of playlistIdArr) {
          const playlistId = item;


          try {
            // 재생목록의 상세 정보 가져오기
            const playlistResponse = await axios.get('https://www.googleapis.com/youtube/v3/playlists', {
              params: {
                part: 'snippet',
                id: playlistId,
                key: API_KEY,
              },
            });

            // 재생목록의 비디오 정보 가져오기
            const videoResponse = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
              params: {
                part: 'snippet',
                playlistId: playlistId,
                maxResults: 10,
                key: API_KEY,
              },
            });

            // 재생목록 및 비디오 정보를 객체로 저장
            const playlistInfo = {
              id: playlistId,
              title: playlistResponse.data.items[0].snippet.title,
              thumbnail: playlistResponse.data.items[0].snippet.thumbnails && playlistResponse.data.items[0].snippet.thumbnails.default && playlistResponse.data.items[0].snippet.thumbnails.default.url ? playlistResponse.data.items[0].snippet.thumbnails.default.url : '',
              videos: videoResponse.data.items.map(video => ({
                id: video.snippet.resourceId.videoId,
                title: video.snippet.title,
                thumbnail: video.snippet.thumbnails.default.url ? video.snippet.thumbnails.default.url : '',
              })),
            };

            if (!playlistInfo.thumbnail && playlistInfo.videos.length > 0) {
              playlistInfo.thumbnail = playlistInfo.videos[0].thumbnail;
            }

            // 재생목록 정보를 배열에 추가
            playlistData.push(playlistInfo);
          } catch (error) {
            console.error('Error fetching playlist data:', error);
            // 에러가 발생했을 때 다음 재생목록으로 넘어감
            continue;
          }
        }

        // 가져온 동영상을 저장
        setTopPlaylists(playlistData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }

  // 동영상이 종료되면 호출되는 콜백 함수
  const onEnd = () => {
    // 다음 동영상으로 이동
    setCurrentIndex((prevIndex) => (prevIndex + 1) % playlistVideoIds.length)
  }




  return (
    <SuggestPlaylistPageView YouTube={YouTube} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} playlistVideoIds={playlistVideoIds} onEnd={onEnd} topPlaylists={topPlaylists} getTopPlayList={getTopPlayList} />
  )
}

export default SuggestPlaylistPage
