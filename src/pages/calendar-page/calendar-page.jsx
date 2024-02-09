import { NavBar } from '../../components'
import { useEffect, useState } from 'react'
import Calendar from 'react-calendar';
//import '../../styles/calendar-page.css';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import 'moment/locale/ko';

const CalendarPageView = () => {
  const curDate = new Date(); // 현재 날짜
  const [value, onChange] = useState(curDate); // 클릭한 날짜 (초기값으로 현재 날짜 넣어줌)
  const activeDate = moment(value).format('YYYY-MM-DD'); // 클릭한 날짜 (년-월-일))

  const monthOfActiveDate = moment(value).format('YYYY-MM'); //현재 보고있는 달
  const [activeMonth, setActiveMonth] = useState(monthOfActiveDate);

  const getActiveMonth = (activeStartDate) => {//: moment.MomentInput //현재 보여지는 달(activeMonth)의 State를 변경
    const newActiveMonth = moment(activeStartDate).format('YYYY-MM');
    setActiveMonth(newActiveMonth);
  };

  // 일기 작성 날짜 리스트
  const imageMappingData = [
    { date: '2024-02-01', imageUrl: '/images/rabbit_red.ico' },
    { date: '2024-02-02', imageUrl: '/images/rabbit_doll.ico' },
    { date: '2024-02-03', imageUrl: '/images/rabbit_red.ico' },
    { date: '2024-02-04', imageUrl: '/images/rabbit_doll.ico' },
    { date: '2024-02-07', imageUrl: '/images/clam.ico' },
  ];

  // 각 날짜 타일에 컨텐츠 추가
  const addContent = ({ date }) => { //각 날짜마다 실행되는 함수
    // 해당 날짜(하루)에 추가할 컨텐츠의 배열
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
  return (
    <div>
      <NavBar />
      <div
        className="container"
        style={{ width: '800px', height: '500px', margin: '0 auto' }}
      >
        <Calendar
          locale="en"
          onChange={onChange}
          value={value}
          next2Label={null}
          prev2Label={null}
          formatDay={(locale, date) => moment(date).format('D')}
          tileContent={addContent}
          showNeighboringMonth={false}
          onActiveStartDateChange={({ activeStartDate }) => //activeStartDate :현재 보여지는 년, 월, 일의 가장 첫 날짜
            getActiveMonth(activeStartDate)
          }
        />
      </div>
    </div>
  )
}

export default CalendarPageView
