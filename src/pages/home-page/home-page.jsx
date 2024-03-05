import Calendar from 'react-calendar';
import styles from './home-page.module.css';
import 'react-calendar/dist/Calendar.css';

import './custom-calendar.css'
import MusicPlayer from '../../components/MusicPlayer'
import Tag from '../../components/common/Tag'

const HomePageView = ({ moment, setCurrentDate, currentDate, addContent, updateActiveMonth, playlist }) => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.calendarContainer}>
        <Calendar
          locale="ko"
          onChange={setCurrentDate}
          value={currentDate}
          next2Label={null}
          prev2Label={null}
          formatMonthYear={({ date }) => moment(date).format('YYYY년 MM월')
          }
          formatDay={(locale, date) => moment(date).format('D')}
          tileContent={addContent}
          showNeighboringMonth={false}
          onActiveStartDateChange={({ activeStartDate }) => //activeStartDate :현재 보여지는 년, 월, 일의 가장 첫 날짜
            updateActiveMonth(activeStartDate)
          }
        />
      </div>
      <div className={styles.diaryContainer}>
        <div>
          <span>{moment(currentDate).format('YYYY.MM.DD (ddd)')}</span>
          <span><img src={'/images/ico_joy.png'} className={styles.moodIcon} /></span>
          <span className={styles.editBtnArea}><button className={styles.editIcon}></button></span>

          <MusicPlayer video={playlist.videoId} />

          <div>
            {playlist.tags &&
              playlist.tags.map((item) => <Tag key={item}>{item}</Tag>)}
          </div>
          <div>
            가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차
          </div>
        </div>

      </div>
    </div >
  )
}

export default HomePageView
