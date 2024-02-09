import { useEffect, useState } from 'react'
import MoodResultPageView from './mood-result-page'
import axios from 'axios';
import YouTube from 'react-youtube'

const MoodResultPage = () => {
  const API_KEY = import.meta.env.VITE_YOUTUBE_KEY

  const searchKeyword = '행복';
  const [topPlaylists, setTopPlaylists] = useState([]);
  const [videos, setVideos] = useState([]);
  //const noCORS = 'https://cors-anywhere.herokuapp.com/';

  useEffect(() => {
    /*
    const fetchData = async () => {
      try {
        // YouTube Data API에서 특정 키워드로 재생목록 검색
        const searchResponse = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            part: 'snippet',
            q: searchKeyword,
            type: 'playlist',
            maxResults: 4,
            order: 'viewCount',
            key: API_KEY,
          },
        });

        // 검색 결과에서 재생목록의 ID 가져오기
        const playlistIdArr = searchResponse.data.items.map(item => item.id.playlistId);
        console.log('검색결과' + searchResponse.data);

        // 재생목록의 상세 정보를 가져오기
        const playlistDetails = await Promise.all(playlistIdArr.map(async id => {
          const playlistResponse = await axios.get('https://www.googleapis.com/youtube/v3/playlists', {
            params: {
              part: 'snippet',
              id: id,
              key: API_KEY,
            },
          });
          return playlistResponse.data.items[0];
        }));

        // 섬네일이 있는 재생목록만 필터링하여 최대 4개까지 저장
        const filteredPlaylists = playlistDetails.filter(playlist => playlist.snippet.thumbnails);
        setTopPlaylists(filteredPlaylists.slice(0, 4));

        // 재생목록의 동영상 ID를 가져온 후
        const videoIdArr = filteredPlaylists.flatMap(playlist => playlist.id);
        console.log(videoIdArr);
        // 동영상의 상세 정보를 가져와 저장
        const videoDetails = await Promise.all(videoIdArr.map(async id => {
          const videoResponse = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
            params: {
              part: 'snippet',
              id: id,
              key: API_KEY,
            },
          });

          const videoData = videoResponse.data.items[0];
          console.log(videoData);
          return videoData;
        }));

        // 가져온 동영상을 저장
        setVideos(videoDetails);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    */
    /*
     const rssFeedUrl = `https://www.youtube.com/feeds/videos.xml?query=${encodeURIComponent(searchKeyword)}`;
 
     fetch(rssFeedUrl)
       .then(response => response.text())
       .then(data => {
         // XML 데이터를 파싱하여 JSON으로 변환
         const parser = new DOMParser();
         const xml = parser.parseFromString(data, 'application/xml');
         const entries = xml.querySelectorAll('entry');
 
         // 피드에서 상위 3개의 재생목록 가져오기
         const topPlaylists = [];
         entries.forEach(entry => {
           const linkElement = entry.querySelector('link[rel="alternate"]');
           if (linkElement && linkElement.href.includes('playlist')) {
             topPlaylists.push({
               title: entry.querySelector('title').textContent,
               link: linkElement.href,
             });
           }
         });
 
         setTopPlaylists(topPlaylists.slice(0, 3));
         console.log(topPlaylists);
       })
       .catch(error => console.error('Error fetching data:', error));
 */

  }, []);

  // 동영상이 종료되면 호출되는 콜백 함수
  const onEnd = () => {
    // 다음 동영상으로 이동
    setCurrentIndex((prevIndex) => (prevIndex + 1) % playlistVideoIds.length)
  }

  // 옵션 설정
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // 동영상의 재생 시작 위치 설정
      start: 0,
      autoplay: 0,
    },
  }

  // 현재 재생 중인 동영상의 인덱스
  const [currentIndex, setCurrentIndex] = useState(0);
  const playlistVideoIds = ['3TNm2tLw88A?si=vrfnDGY8zrhn4ARt', 'JUzPQ0JalHE'];

  useEffect(() => {
  }, [])
  return (
    <MoodResultPageView YouTube={YouTube} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} playlistVideoIds={playlistVideoIds} onEnd={onEnd} opts={opts} topPlaylists={topPlaylists} />
  )
}

export default MoodResultPage
