import { Route, Routes, Link, Outlet } from 'react-router-dom'
import LoginPage from './pages/login-page'
import RegisterPage from './pages/register-page'
import MoodResultPage from './pages/mood-result-page'
import SuggestPlaylistPage from './pages/suggest-playlist-page'
import ReportPage from './pages/report-page'
import Calendar from './pages/calendar-page'
import KakaoCallback from './pages/kakao-callback'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SuggestPlaylistPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/result" element={<MoodResultPage />} />
      <Route path="/playlist" element={<SuggestPlaylistPage />} />
      <Route
        path="/mood"
        element={
          <div>
            <Outlet></Outlet>
          </div>
        }
      >
        <Route path="test" element={<div>테스트</div>} />
        <Route path="report" element={<ReportPage />} />
      </Route>
      <Route path="auth/kakao/callback" element={<KakaoCallback />} />

    </Routes>
  )
}

export default App
