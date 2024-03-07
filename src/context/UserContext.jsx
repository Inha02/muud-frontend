import React, { createContext, useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/ko'; // 한국어 locale을 불러옵니다.

const UserContext = createContext();

// Context Provider 컴포넌트 
export const UserDataProvider = ({ children }) => {
  moment.updateLocale('ko', { weekdays: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"], weekdaysShort: ["일", "월", "화", "수", "목", "금", "토"], });
  const [currentDate, setCurrentDate] = useState(moment());
  const [currentDateKor, setCurrentDateKor] = useState(moment().format('M월 D일 dddd'));

  useEffect(() => {
    //setCurrentDate(moment().format('M월 D일 dddd'));
  }, []);
  useEffect(() => {
    setCurrentDateKor(currentDate.format('M월 D일 dddd'));
  }, [currentDate]);

  return (
    <UserContext.Provider value={{ currentDate, setCurrentDate, currentDateKor }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return React.useContext(UserContext);
};