import { useEffect, useState } from 'react'
import HomePageView from './home-page'
import moment from 'moment';
import 'moment/locale/ko';
import { getMoodIcon } from '../../utils'
import { diarySample } from '../../constants/testData'
import { Get } from '../../api/axios'

const HomePage = () => {
  const moodMappingData = diarySample;
  const today = new Date(); // 현재 날짜
  const [currentDate, setCurrentDate] = useState(today); // 클릭한 날짜 
  const activeDate = moment(currentDate).format('YYYY-MM-DD');
  const monthOfActiveDate = moment(currentDate).format('YYYY-MM');
  const [activeMonth, setActiveMonth] = useState(monthOfActiveDate);
  const [currentDiary, setCurrentDiary] = useState({})

  const updateActiveMonth = (activeStartDate) => {
    const newActiveMonth = moment(activeStartDate).format('YYYY-MM');
    setActiveMonth(newActiveMonth);
  };

  const updateActiveDay = (date) => {
    setCurrentDate(date)
    updateDiary(date)
  }

  const updateDiary = (date) => {
    //해당일이 기록에 있으면 조회후 출력 
    const foundData = moodMappingData.find(item => item.date === moment(date).format('YYYY-MM-DD')); //moment(date).format('YYYY-MM-DD');
    if (foundData) {
      setCurrentDiary(foundData)
    } else {
      setCurrentDiary({})
    }

  }

  const getDiaryAxios = async () => {
    try {
      const foundData = moodMappingData.find(item => item.date === moment(currentDate).format('YYYY-MM-DD'));

      const response = await Get(`/diaries/${foundData.diaryId}`)
      console.log(response.data)
      if (response.data) {
        setCurrentDiary(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const tileClassNames = ({ date }) => {
    const today = new Date();
    return date < today ? 'pastDay' : ''; // 이전 날짜에 'disabled' 클래스 추가
  };

  // 각 날짜마다 실행해 타일에 컨텐츠 추가
  const addContent = ({ date }) => {
    const contents = [];
    //date(각 날짜)가  리스트의 날짜와 일치하고 해당 이미지가 있다면 컨텐츠 추가
    moodMappingData.find((item) => {
      const matchingDay = item.date === moment(date).format('YYYY-MM-DD');
      if (matchingDay) {
        contents.push(
          <div key={matchingDay}>
            <img src={getMoodIcon(item.emotion.titleEmotion)} alt="이미지 설명" width="26" height="26" />
          </div>
        );
      }
    });

    return <div>{contents}</div>;
  };

  return <HomePageView moment={moment} tileClassNames={tileClassNames} currentDiary={currentDiary} currentDate={currentDate} updateActiveDay={updateActiveDay} addContent={addContent} updateActiveMonth={updateActiveMonth} />
}

export default HomePage
