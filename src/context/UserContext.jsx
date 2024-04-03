import React, { createContext, useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/ko';
import { useCookies } from 'react-cookie';
import { removeConfig, setConfig } from '../api/axios'

const UserContext = createContext();

export const UserDataProvider = ({ children }) => {
  moment.updateLocale('ko', { weekdays: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"], weekdaysShort: ["일", "월", "화", "수", "목", "금", "토"], });

  const [today, setToday] = useState(moment());
  const [currentDate, setCurrentDate] = useState(() => {
    const stored = localStorage.getItem('activeDate');
    return stored ? moment(stored) : moment();
  });
  const [currentDateKor, setCurrentDateKor] = useState(moment().format('M월 D일 dddd'));
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    return storedAuth === 'true';
  });
  const [cookies, , removeCookie] = useCookies(['accessToken', 'refreshToken', 'id', 'nickname']);

  const logoutContext = () => {
    ['accessToken', 'nickname', 'id', 'refreshToken', 'expiresAt'].forEach(cookie => removeCookie(cookie))
    console.log('로그아웃' + cookies.nickname)
    removeConfig('Authorization')
    localStorage.removeItem('activeDate')
    setCurrentDate(moment())
  }

  useEffect(() => {
    setCurrentDateKor(currentDate.format('M월 D일 dddd'))
    localStorage.setItem('activeDate', currentDate)
  }, [currentDate])

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated)
    if (!isAuthenticated) {
      logoutContext()
    }
    if (isAuthenticated) { setConfig({ accessToken: cookies.accessToken }) }
  }, [isAuthenticated])

  return (
    <UserContext.Provider value={{ today, currentDate, setCurrentDate, currentDateKor, isAuthenticated, setIsAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return React.useContext(UserContext)
};