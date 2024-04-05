import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import { UserDataProvider } from './context/UserContext';
import { BrowserView, MobileView } from 'react-device-detect'
import { useUserContext } from './context/UserContext'

import LoginPage from './pages/login-page'
import RegisterPage from './pages/register-page'
import MoodResultPage from './pages/mood-result-page'
import SuggestPlaylistPage from './pages/suggest-playlist-page'
import DiaryCompletePage from './pages/diary-complete-page'
import ReportPage from './pages/report-page'
import HomePage from './pages/home-page'
import UserNicknamePage from './pages/user-nickname-page';
import IntroducePage from './pages/introduce-page';
import MoodChoosePage from './pages/mood-choose-page';
import DiaryDetailPage from './pages/diary-detail-page';

import KakaoCallback from './pages/kakao-callback'
import MobileContent from './layout/MobileContent';
import MobileContainer from "./layout/MobileContainer";
import BackBtnContainer from "./layout/BackBtnContainer";
import RouteChangeTracker from "./RouteChangeTracker";
import GoogleTagManager from './GoogleTagManager';

import './App.css';

const Pages = () => {
  RouteChangeTracker();
  const { isAuthenticated } = useUserContext();
  return (
    <Routes>
      <>
        <Route path="/diary/complete" element={<DiaryCompletePage />} />
        {(isAuthenticated) ? (
          <>
            <Route path="/user/nickname" element={<UserNicknamePage />} />
            <Route path="*" element={<Navigate to="/home" />} />
            <Route path="/*" element={<BackBtnContainer />}>
              <Route path="home" element={<HomePage />} />
              <Route path="diary/detail" element={<DiaryDetailPage />} />
              <Route path="mood/report" element={<ReportPage />} />
            </Route>
          </>
        ) :
          (<>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/oauth2/callback/kakao" element={<KakaoCallback />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
          )
        }
        <Route path="/*" element={<BackBtnContainer />}>
          <Route path="introduce" element={<IntroducePage />} />
          <Route path="mood/choose" element={<MoodChoosePage />} />
          <Route path="mood/result" element={<MoodResultPage />} />
          <Route path="playlist" element={<SuggestPlaylistPage />} />
        </Route>
      </>
    </Routes>
  )
}

function App() {
  return (
    <div className="App">
      <UserDataProvider>
        <BrowserView>
          <Routes>
            <Route path="*" element={
              <MobileContainer>
                <Pages />
              </MobileContainer>
            } />
          </Routes>
        </BrowserView>

        <MobileView className='mobileView'>
          <Routes>
            <Route path="*" element={
              <MobileContent>
                <Pages />
              </MobileContent>
            } />
          </Routes>
        </MobileView>
      </UserDataProvider>
      <GoogleTagManager />
    </div >

  )
}

export default App
