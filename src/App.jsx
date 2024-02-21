import { useEffect, useState, useContext } from 'react';
import { Route, Routes, Link, Outlet } from 'react-router-dom'
import { BrowserView, MobileView } from 'react-device-detect'
import LoginPage from './pages/login-page'
import RegisterPage from './pages/register-page'
import MoodResultPage from './pages/mood-result-page'
import SuggestPlaylistPage from './pages/suggest-playlist-page'
import ReportPage from './pages/report-page'
import CalendarPage from './pages/calendar-page'
import UserNicknamePage from './pages/user-nickname-page';
import KakaoCallback from './pages/kakao-callback'
import MobileContainer from "./layout/MobileContainer";
import BackBtnContainer from "./layout/BackBtnContainer";
import NavBar from "./components/NavBar";

import './App.css';

//헤더 뒤로가기, 탑바 없기 구분해야함 
const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/auth/kakao/callback" element={<KakaoCallback />} />
      <Route path="*" element={
        <BackBtnContainer>
          <Routes>
            <Route path="/result" element={<MoodResultPage />} />
            <Route path="/playlist" element={<SuggestPlaylistPage />} />
            <Route path="/mood/test" element={<div>테스트</div>} />
            <Route path="/mood/report" element={<ReportPage />} />
            <Route path="/user/nickname" element={<UserNicknamePage />} />
          </Routes>
        </BackBtnContainer>}>
      </Route>
    </Routes>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserView>
        <NavBar />
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
          <Pages />
        </Routes>
      </MobileView>
    </div >

  )
}

export default App
