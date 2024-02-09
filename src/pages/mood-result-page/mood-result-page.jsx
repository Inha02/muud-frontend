import { NavBar } from '../../components'

const MoodResultPageView = ({
  YouTube,
  currentIndex,
  setCurrentIndex,
  playlistVideoIds,
  onEnd,
  opts,
  topPlaylists
}) => {
  return (
    <div>
      <NavBar />
      <YouTube
        videoId={playlistVideoIds[currentIndex]}
        opts={opts}
        onEnd={onEnd}
      />

      <h1>Top 3 Playlists for keyword</h1>
      {
      /*topPlaylists.map(playlist => (
        <div key={playlist.id}>
          <h2>{playlist.snippet.title}</h2>
          <img src={playlist.snippet.thumbnails.default.url} alt={playlist.snippet.title} />

        </div>
      ))
      */}

      <h3>플레이리스트</h3>
      <ul>
        {/* 플레이리스트에 속한 동영상 목록 출력 */}
        {playlistVideoIds.map((videoId, index) => (
          <li key={index}>
            <button onClick={() => setCurrentIndex(index)}>
              동영상 {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MoodResultPageView
