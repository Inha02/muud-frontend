import { useEffect, useState, useContext, useRef } from 'react'

import MoodChoosePageView from './mood-choose-page'
import moment from 'moment';
import 'moment/locale/ko'; // 한국어 locale을 불러옵니다.


const MoodChoosePage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  moment.updateLocale('ko', { weekdays: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"], weekdaysShort: ["일", "월", "화", "수", "목", "금", "토"], });
  let currentDate = moment().format('M월 D일 dddd');
  const moodArray = [
    { text: '내 마음은 조용하고 단순한 분위기예요' },
    { text: '두근두근 기분이 좋고,웃을 일이 많아요' },
    { text: '뭔가 입맛이 없고, 자꾸 슬퍼져요' },
    { text: '할 일이 너무 많고, 하루가 길게 느껴져요' },
    { text: '답답하고, 스트레스를 많이 받았어요' },
    { text: '왠지 모르게 작은 일에도 쉽게 화가 나요' }

  ];

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };



  return (
    <MoodChoosePageView
      selectedOption={selectedOption}
      handleButtonClick={handleButtonClick}
      currentDate={currentDate}
      moodArray={moodArray}
    />
  )
}

export default MoodChoosePage
