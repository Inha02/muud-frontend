import MusicPlayer from "../../components/MusicPlayer";
import styles from '../../components/MusicPlayer/MusicPlayer.module.css'; // CSS 모듈 임포트


const SuggestPlaylistPageView = ({
  YouTube,
  playlistVideoIds,
  topPlaylists,
  getTopPlayList,
  playing,
  setPlaying
}) => {
  return (
    <>
      <h1>뮤디님을 위한 플레이리스트</h1>
      <h5>마음에 드는 플리를 선택해서 감정과 함께 저장해보세요</h5>

      <MusicPlayer video={'JUzPQ0JalHE'} />
      <MusicPlayer video={'JUzPQ0JalHE'} />
      <MusicPlayer video={'JUzPQ0JalHE'} />
      <MusicPlayer video={'JUzPQ0JalHE'} />

      <button onClick={() => getTopPlayList()}>
        추천받기
      </button>
      {
        topPlaylists.map(playlist => (
          <div key={playlist.id}>
            <h1>{playlist.title}</h1>
            <img src={playlist.thumbnail} alt={playlist.title} />
            {playlist.videos.map(video => (
              <div key={video.id}>
                <h3>{video.title}</h3>

                <MusicPlayer video={video.playlistId} />

              </div>
            ))
            }
          </div >
        ))
      }

      <div>
        <span>나의 일기와 플레이리스트 컬렉션에 추가되었습니다</span>
      </div>
      <button>
        다음
      </button>
    </ >
  )
}

export default SuggestPlaylistPageView
