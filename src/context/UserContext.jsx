import React, { createContext, useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/ko'; // 한국어 locale을 불러옵니다.

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

  useEffect(() => {
  }, []);
  useEffect(() => {
    setCurrentDateKor(currentDate.format('M월 D일 dddd'));
    console.log("액티브 날짜" + currentDate.format('M월 D일 dddd'))
    localStorage.setItem('activeDate', currentDate);
  }, [currentDate]);
  useEffect(() => {
    console.log("로그인여부" + isAuthenticated)
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  return (
    <UserContext.Provider value={{ today, currentDate, setCurrentDate, currentDateKor, isAuthenticated, setIsAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return React.useContext(UserContext);
};