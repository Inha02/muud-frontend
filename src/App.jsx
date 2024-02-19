import { Route, Routes, Link, Outlet } from 'react-router-dom'
import { BrowserView, MobileView } from 'react-device-detect'
import LoginPage from './pages/login-page'
import RegisterPage from './pages/register-page'
import MoodResultPage from './pages/mood-result-page'
import SuggestPlaylistPage from './pages/suggest-playlist-page'
import ReportPage from './pages/report-page'
import Calendar from './pages/calendar-page'
import KakaoCallback from './pages/kakao-callback'
import Container from "./layout/Container";
import NavBar from "./components/NavBar";
import './App.css';

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<SuggestPlaylistPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/result" element={<MoodResultPage />} />
      <Route path="/playlist" element={<SuggestPlaylistPage />} />
      <Route path="/mood/test" element={<div>테스트</div>} />
      <Route path="/mood/report" element={<ReportPage />} />
      <Route path="/auth/kakao/callback" element={<KakaoCallback />} />
    </Routes>
  )
}
function App() {
  return (
    <div className="App">
      <BrowserView>
        <NavBar />
        <Routes>
          <Route path="/*" element={
            <Container>
              <Pages />
            </Container>} />
        </Routes>
      </BrowserView>
      <MobileView>
        <Routes>
          <Pages />
        </Routes>
      </MobileView>
    </div>

  )
}

export default App
