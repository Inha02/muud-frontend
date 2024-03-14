import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HomePageView from './home-page'
import moment from 'moment';
import 'moment/locale/ko';
import { getMoodIcon } from '../../utils'
import { diarySample } from '../../constants/testData'
import { Get, be } from '../../api/axios'
import { useUserContext } from '../../context/UserContext';
import { useModal } from '../../context/ModalContext';

const HomePage = () => {
  const { currentDate, setCurrentDate } = useUserContext();
  const monthOfActiveDate = moment(currentDate).format('yyyy-MM');
  const [activeMonth, setActiveMonth] = useState(monthOfActiveDate);
  const [currentMonthDiary, setCurrentMonthDiary] = useState(diarySample);
  const [currentDiary, setCurrentDiary] = useState({})
  const navigateTo = useNavigate();
  const { modalOpen } = useModal();

  const handleRecord = () => {
    navigateTo('/mood/choose')
  }

  const handleEdit = () => {
    navigateTo(`/diary/detail?id=${currentDiary.id}`)
  }

  const updateActiveMonth = (activeStartDate) => {
    const newActiveMonth = moment(activeStartDate).format('yyyy-MM');
    setActiveMonth(newActiveMonth);
    setCurrentDate(moment(activeStartDate));
  };

  const updateActiveDay = (date) => {
    setCurrentDate(moment(date))
    updateDiary(moment(date))
  }

  const updateDiary = (date) => {
    //해당일이 기록에 있으면 조회후 출력 
    const foundData = currentMonthDiary.find(item => item.referenceDate === moment(date).format('YYYY-MM-DD'));
    if (foundData) {
      setCurrentDiary(foundData)
    } else {
      setCurrentDiary({})
    }
  }

  const tileClassNames = ({ date }) => {
    const today = new Date();
    return date < today ? 'pastDay' : ''; // 이전 날짜에 'today' 클래스 추가
  };

  // 각 날짜마다 실행해 타일에 컨텐츠 추가
  const addContent = ({ date }) => {
    const contents = [];
    currentMonthDiary.find((item) => {
      const matchingDay = item.referenceDate === moment(date).format('YYYY-MM-DD');
      if (matchingDay) {
        contents.push(
          <div key={item.id}>
            <img className='moodEmojiESmall' src={getMoodIcon(item.emotion.titleEmotion)} alt={item.emotion.titleEmotion} />
          </div>
        );
      }
    });

    return <div>{contents}</div>;
  };

  const getMonthDiaryAxios = async () => {
    if (!(be.defaults.headers.common['Authorization'])) { return }
    try {
      const response = await Get(`/diaries/month?date=${activeMonth}`)
      if (response) setCurrentMonthDiary(response.data)
    } catch (error) {
      modalOpen({
        content: '월별 일기 조회에 실패했습니다',
      });
      console.log(error)
    }
  }

  useEffect(() => {
    if (activeMonth) {
      getMonthDiaryAxios()
    }
  }, [activeMonth]);
  useEffect(() => {
    //현재 다이어리 출력 
    updateDiary(currentDate)
  }, [currentMonthDiary]);

  return <HomePageView moment={moment} handleEdit={handleEdit} handleRecord={handleRecord} tileClassNames={tileClassNames} currentDiary={currentDiary} currentDate={currentDate} updateActiveDay={updateActiveDay} addContent={addContent} updateActiveMonth={updateActiveMonth} />
}

export default HomePage
