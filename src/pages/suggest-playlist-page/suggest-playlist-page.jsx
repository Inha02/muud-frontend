import { NavBar } from '../../components'

const SuggestPlaylistPageView = ({
  YouTube,
  currentIndex,
  setCurrentIndex,
  playlistVideoIds,
  onEnd,
  opts,
  topPlaylists,
  getTopPlayList
}) => {
  return (
    <div>
      <NavBar />

      <h1>비커님을 위한 추천 플레이리스트</h1>
      <h5>마음에 드는 플리를 선택해서 감정과 함께 저장해보세요</h5>
      {/* <YouTube
        videoId={playlistVideoIds[currentIndex]}
        opts={opts}
        onEnd={onEnd}
      />
      <h3>영상 전환</h3>
      <ul>
      {playlistVideoIds.map((videoId, index) => (
        <li key={index}>
          <button onClick={() => setCurrentIndex(index)}>
            동영상 {index + 1}
          </button>
        </li>
      ))}
    </ul> 
    */}

      < h1 > Top 3 Playlists for keyword</h1 >
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
                {/* <YouTube
                  videoId={video.id}
                  opts={opts}
                /> 
                cors 에러
                */}
                <h2>아이프레임</h2>
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            ))
            }
          </div >
        ))
      }
    </div >
  )
}

export default SuggestPlaylistPageView
