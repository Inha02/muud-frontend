import { useEffect, useState } from 'react'
import HomePageView from './home-page'
import moment from 'moment';
import 'moment/locale/ko';
import { getMoodIcon } from '../../utils'

const HomePage = () => {
  const moodMappingData = [
    {
      "date": '2024-03-02',
      "diaryId": 1,
      "content": "안녕하세요안녕하세요",
      "emotion": {
        "titleEmotion": "우울",
        "combinedName": "우르르 쾅쾅",
        "description": "마음을 쾅쾅 두드리는 화가 가득해요",
        "tags": [
          "분노",
          "짜증",
          "극대노"
        ]
      },
      "createdDate": "2024-02-24T15:10:41.96862",
      "updatedDate": "2024-02-24T15:10:41.96862",
      "playlist": {
        "title": "제목",
        "videoId": "JUzPQ0JalHE",
      }
    },
    {
      "date": '2024-03-05',
      "diaryId": 2,
      "content": "안녕하세요안녕하세요",
      "emotion": {
        "titleEmotion": "우울",
        "combinedName": "우르르 쾅쾅",
        "description": "마음을 쾅쾅 두드리는 화가 가득해요",
        "tags": [
          "분노",
          "짜증",
          "극대노"
        ]
      },
      "createdDate": "2024-02-24T15:10:42.828103",
      "updatedDate": "2024-02-24T15:10:42.828103",
      "playlist": {
        "title": "제목",
        "videoId": "JUzPQ0JalHE",
      }
    },
    {
      "date": '2024-03-06',
      "diaryId": 2,
      "content": "안녕하세요안녕하세요",
      "emotion": {
        "titleEmotion": "우울",
        "combinedName": "우르르 쾅쾅",
        "description": "마음을 쾅쾅 두드리는 화가 가득해요",
        "tags": [
          "분노",
          "짜증",
          "극대노"
        ]
      },
      "createdDate": "2024-02-24T15:10:42.828103",
      "updatedDate": "2024-02-24T15:10:42.828103",
      "playlist": {
        "title": "제목",
        "videoId": "JUzPQ0JalHE",
      }
    },
    {
      "date": '2024-03-23',
      "diaryId": 2,
      "content": "안녕하세요안녕하세요",
      "emotion": {
        "titleEmotion": "우울",
        "combinedName": "우르르 쾅쾅",
        "description": "마음을 쾅쾅 두드리는 화가 가득해요",
        "tags": [
          "분노",
          "짜증",
          "극대노"
        ]
      },
      "createdDate": "2024-02-24T15:10:42.828103",
      "updatedDate": "2024-02-24T15:10:42.828103",
      "playlist": {
        "title": "제목",
        "videoId": "JUzPQ0JalHE",
      }
    },
    {
      "date": '2024-03-30',
      "diaryId": 2,
      "content": "안녕하세요안녕하세요",
      "emotion": {
        "titleEmotion": "우울",
        "combinedName": "우르르 쾅쾅",
        "description": "마음을 쾅쾅 두드리는 화가 가득해요",
        "tags": [
          "분노",
          "짜증",
          "극대노"
        ]
      },
      "createdDate": "2024-02-24T15:10:42.828103",
      "updatedDate": "2024-02-24T15:10:42.828103",
      "playlist": {
        "title": "제목",
        "videoId": "JUzPQ0JalHE",
      }
    },
    {
      "date": '2024-03-09',
      "diaryId": 2,
      "content": "안녕하세요안녕하세요",
      "emotion": {
        "titleEmotion": "우울",
        "combinedName": "우르르 쾅쾅",
        "description": "마음을 쾅쾅 두드리는 화가 가득해요",
        "tags": [
          "분노",
          "짜증",
          "극대노"
        ]
      },
      "createdDate": "2024-02-24T15:10:42.828103",
      "updatedDate": "2024-02-24T15:10:42.828103",
      "playlist": {
        "title": "제목",
        "videoId": "JUzPQ0JalHE",
      }
    },
    {
      "date": '2024-03-16',
      "diaryId": 2,
      "content": "안녕하세요안녕하세요",
      "emotion": {
        "titleEmotion": "우울",
        "combinedName": "우르르 쾅쾅",
        "description": "마음을 쾅쾅 두드리는 화가 가득해요",
        "tags": [
          "분노",
          "짜증",
          "극대노"
        ]
      },
      "createdDate": "2024-02-24T15:10:42.828103",
      "updatedDate": "2024-02-24T15:10:42.828103",
      "playlist": {
        "title": "제목",
        "videoId": "JUzPQ0JalHE",
      }
    },
    {
      "date": '2024-03-04',
      "diaryId": 2,
      "content": "안녕하세요안녕하세요",
      "emotion": {
        "titleEmotion": "우울",
        "combinedName": "우르르 쾅쾅",
        "description": "마음을 쾅쾅 두드리는 화가 가득해요",
        "tags": [
          "분노",
          "짜증",
          "극대노"
        ]
      },
      "createdDate": "2024-02-24T15:10:42.828103",
      "updatedDate": "2024-02-24T15:10:42.828103",
      "playlist": {
        "title": "제목",
        "videoId": "JUzPQ0JalHE",
      }
    },
    {
      "date": '2024-03-07',
      "diaryId": 2,
      "content": "안녕하세요안녕하세요",
      "emotion": {
        "titleEmotion": "우울",
        "combinedName": "우르르 쾅쾅",
        "description": "마음을 쾅쾅 두드리는 화가 가득해요",
        "tags": [
          "분노",
          "짜증",
          "극대노"
        ]
      },
      "createdDate": "2024-02-24T15:10:42.828103",
      "updatedDate": "2024-02-24T15:10:42.828103",
      "playlist": {
        "title": "제목",
        "videoId": "JUzPQ0JalHE",
      }
    },
    {
      "date": '2024-03-08',
      "diaryId": 2,
      "content": "안녕하세요안녕하세요",
      "emotion": {
        "titleEmotion": "우울",
        "combinedName": "우르르 쾅쾅",
        "description": "마음을 쾅쾅 두드리는 화가 가득해요",
        "tags": [
          "분노",
          "짜증",
          "극대노"
        ]
      },
      "createdDate": "2024-02-24T15:10:42.828103",
      "updatedDate": "2024-02-24T15:10:42.828103",
      "playlist": {
        "title": "제목",
        "videoId": "JUzPQ0JalHE",
      }
    },
    {
      "date": '2024-03-10',
      "diaryId": 2,
      "content": "안녕하세요안녕하세요",
      "emotion": {
        "titleEmotion": "우울",
        "combinedName": "우르르 쾅쾅",
        "description": "마음을 쾅쾅 두드리는 화가 가득해요",
        "tags": [
          "분노",
          "짜증",
          "극대노"
        ]
      },
      "createdDate": "2024-02-24T15:10:42.828103",
      "updatedDate": "2024-02-24T15:10:42.828103",
      "playlist": {
        "title": "제목",
        "videoId": "JUzPQ0JalHE",
      }
    },
  ];
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
      getDiaryAxios();
      console.log('매핑에 있');
      setCurrentDiary(foundData)
    } else {
      setCurrentDiary({})
    }

  }

  const getDiaryAxios = () => {

  }

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

  return <HomePageView moment={moment} currentDiary={currentDiary} currentDate={currentDate} updateActiveDay={updateActiveDay} addContent={addContent} updateActiveMonth={updateActiveMonth} />
}

export default HomePage
