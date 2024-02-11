import { useEffect, useState } from 'react'
import CalendarPageView from './calendar-page'
import moment from 'moment';
import 'moment/locale/ko';

const CalendarPage = () => {
  useEffect(() => { }, [])

  // 일기 작성 날짜 리스트
  const imageMappingData = [
    { date: '2024-02-01', imageUrl: '/images/rabbit_red.ico' },
    { date: '2024-02-02', imageUrl: '/images/rabbit_doll.ico' },
    { date: '2024-02-03', imageUrl: '/images/rabbit_red.ico' },
    { date: '2024-02-04', imageUrl: '/images/rabbit_doll.ico' },
    { date: '2024-02-07', imageUrl: '/images/clam.ico' },
  ];
  const today = new Date(); // 현재 날짜
  const [currentDate, setCurrentDate] = useState(today); // 클릭한 날짜 
  // const activeDate = moment(currentDate).format('YYYY-MM-DD');
  const monthOfActiveDate = moment(currentDate).format('YYYY-MM');
  const [activeMonth, setActiveMonth] = useState(monthOfActiveDate);

  const updateActiveMonth = (activeStartDate) => {
    const newActiveMonth = moment(activeStartDate).format('YYYY-MM');
    setActiveMonth(newActiveMonth);
  };

  // 각 날짜마다 실행해 타일에 컨텐츠 추가
  const addContent = ({ date }) => {
    const contents = [];
    //date(각 날짜)가  리스트의 날짜와 일치하고 해당 이미지가 있다면 컨텐츠 추가
    imageMappingData.find((item) => {
      const matchingDay = item.date === moment(date).format('YYYY-MM-DD');
      if (matchingDay) {
        if (item.imageUrl) { // 이미지 데이터가 있으면 해당 이미지를 넣음
          contents.push(
            <div key={matchingDay}>
              <img src={item.imageUrl} alt="이미지 설명" width="26" height="26" />
            </div>
          );
        }
      }
    });

    return <div>{contents}</div>;
  };

  return <CalendarPageView moment={moment} currentDate={currentDate} setCurrentDate={setCurrentDate} addContent={addContent} updateActiveMonth={updateActiveMonth} />
}

export default CalendarPage
