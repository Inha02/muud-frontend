import Calendar from 'react-calendar';
import './/calendar-page.css';
import 'react-calendar/dist/Calendar.css';


const CalendarPageView = ({ moment, setCurrentDate, currentDate, addContent, updateActiveMonth }) => {

  return (
    <div>
      <div
        className="container"
        style={{ width: '800px', height: '500px', margin: '0 auto' }}
      >
        <Calendar
          locale="en"
          onChange={setCurrentDate}
          value={currentDate}
          next2Label={null}
          prev2Label={null}
          formatDay={(locale, date) => moment(date).format('D')}
          tileContent={addContent}
          showNeighboringMonth={false}
          onActiveStartDateChange={({ activeStartDate }) => //activeStartDate :현재 보여지는 년, 월, 일의 가장 첫 날짜
            updateActiveMonth(activeStartDate)
          }
        />
      </div>
    </div>
  )
}

export default CalendarPageView
