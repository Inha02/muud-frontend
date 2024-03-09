import { useEffect, useState, useContext } from 'react';
import { useCookies } from 'react-cookie';
import { Route, Routes, Link, Outlet, Navigate } from 'react-router-dom'
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
import NavBar from "./components/NavBar";

import './App.css';

const Pages = () => {
  const { isAuthenticated } = useUserContext();

  return (
    <Routes>
      {(isAuthenticated) ? (
        <>
          <Route path="/*" element={<BackBtnContainer />}>
            <Route path="home" element={<HomePage />} />
            <Route path="mood/result" element={<MoodResultPage />} />
            <Route path="playlist" element={<SuggestPlaylistPage />} />
            <Route path="diary/detail" element={<DiaryDetailPage />} />
            <Route path="mood/report" element={<ReportPage />} />
            <Route path="introduce" element={<IntroducePage />} />
            <Route path="mood/choose" element={<MoodChoosePage />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Route>
          <Route path="diary/complete" element={<DiaryCompletePage />} />
          <Route path="user/nickname" element={<UserNicknamePage />} />
        </>
      ) :
        (
          <Route path="/*" element={<Outlet></Outlet>}>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="oauth2/callback/kakao" element={<KakaoCallback />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Route>
        )
      }
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

        <MobileView>
          <Routes>
            <Route path="*" element={
              <MobileContent>
                <Pages />
              </MobileContent>
            } />
          </Routes>
        </MobileView>
      </UserDataProvider>
    </div >

  )
}

export default App
