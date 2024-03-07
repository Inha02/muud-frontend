import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import HomePageView from './home-page'
import moment from 'moment';
import 'moment/locale/ko';
import { getMoodIcon } from '../../utils'
import { diarySample } from '../../constants/testData'
import { Get } from '../../api/axios'
import { useUserContext } from '../../context/UserContext';
import { useModal } from '../../context/ModalContext';

const HomePage = () => {
  const { currentDate, setCurrentDate } = useUserContext();
  const monthOfActiveDate = moment(currentDate).format('yyyy-MM');
  const [activeMonth, setActiveMonth] = useState(monthOfActiveDate);
  const [currentMonthDiary, setCurrentMonthDiary] = useState(diarySample);
  const [currentDiary, setCurrentDiary] = useState({})
  //const [calendarContent, setCalendarContent] = useState({})
  const navigateTo = useNavigate();
  const { modalOpen } = useModal();

  const handleRecord = () => {
    navigateTo('/mood/choose')
  }

  const handleEdit = () => {
    navigateTo(`/diary/detail?id=${currentDiary.diaryId}`)
  }

  const updateActiveMonth = (activeStartDate) => {
    const newActiveMonth = moment(activeStartDate).format('yyyy-MM');
    setActiveMonth(newActiveMonth);
    setCurrentDate(moment(activeStartDate));
    getMonthDiaryAxios(newActiveMonth);
  };

  const updateActiveDay = (date) => {
    setCurrentDate(moment(date))
    updateDiary(moment(date))
  }

  const updateDiary = (date) => {
    //해당일이 기록에 있으면 조회후 출력 
    const foundData = currentMonthDiary.find(item => item.referenceDate === moment(date).format('YYYY-MM-DD')); //moment(date).format('YYYY-MM-DD');
    if (foundData) {
      setCurrentDiary(foundData)
    } else {
      setCurrentDiary({})
    }

  }

  const getMonthDiaryAxios = async () => {
    try {
      const response = await Get(`/diaries/month?date=${activeMonth}`)
      //console.log(response.data)
      if (response.data) {
        setCurrentMonthDiary(response.data)
      }
    } catch (error) {
      modalOpen({
        content: '일기 조회에 실패했습니다',
      });
      console.log(error)
    }
  }

  const tileClassNames = ({ date }) => {
    const today = new Date();
    return date < today ? 'pastDay' : ''; // 이전 날짜에 'disabled' 클래스 추가
  };

  // 각 날짜마다 실행해 타일에 컨텐츠 추가
  const addContent = ({ date }) => {
    //console.log('애드컨' + date)
    const contents = [];
    //date(각 날짜)가  리스트의 날짜와 일치하고 해당 이미지가 있다면 컨텐츠 추가
    currentMonthDiary.find((item) => {
      //  console.log(item)
      const matchingDay = item.referenceDate === moment(date).format('YYYY-MM-DD');
      if (matchingDay) {//key={matchingDay.id}
        contents.push(
          <div key={item.id}>
            <img src={getMoodIcon(item.emotion.titleEmotion)} alt="이미지 설명" width="26" height="26" />
          </div>
        );
      }
    });
    //setCalendarContent(contents)

    return <div>{contents}</div>;
  };

  // 활성 날짜(currentDate)가 변경될 때마다 실행
  useEffect(() => {
    //updateActiveMonth(currentDate); // 활성 월 업데이트
  }, [currentDate]);
  useEffect(() => {
    getMonthDiaryAxios()
  }, [activeMonth]);
  useEffect(() => {
    //현재 다이어리 출력 
    updateDiary(currentDate)
  }, [currentMonthDiary]);
  useEffect(() => {
  }, []);

  useEffect(() => {
  }, [currentMonthDiary, currentDate]);


  return <HomePageView moment={moment} handleEdit={handleEdit} handleRecord={handleRecord} tileClassNames={tileClassNames} currentDiary={currentDiary} currentDate={currentDate} updateActiveDay={updateActiveDay} addContent={addContent} updateActiveMonth={updateActiveMonth} />
}

export default HomePage
