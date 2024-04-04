import {moodDataArray} from './constants/testData'
import moment from 'moment';
import 'moment/locale/ko';
import { removeConfig } from './api/axios';

const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return regex.test(email)
}
const validatePswd = (pswd) => {
  return pswd.length >= 8 && pswd.length <= 15
}

const getMoodData = (mood) => {
 return moodDataArray.filter(item => item.id == mood)[0];
}

// @param {moment} date 
const getCurrentDateKor=(date)=>{
  return date.format('M월 D일 dddd')
}

const getMoodIcon = (moodText) => {
  switch (moodText) {
    case '기쁨': //
      return '/images/ico_sunny-mood.png'
    case '분노': //
      return '/images/ico_thunder-mood.png'
    case '슬픔': //
      return '/images/ico_rainy-mood.png'
    case '피곤': //
      return '/images/ico_foggy-mood.png'
    case '덤덤': //
      return '/images/ico_cloudy-mood.png'
    case '우울': //
      return '/images/ico_typhoon-mood.png'
    default:
      return '/'
  }
}

const getMoodImg = (mood) => {
  switch (mood) {
    case 'EMOTION1': //EMOTION1
      return '/images/sunny-mood.png'
    case 'EMOTION2': //EMOTION2
      return '/images/thunder-mood.png'
    case 'EMOTION3': //EMOTION3
      return '/images/rainy-mood.png'
    case 'EMOTION4': //EMOTION4
      return '/images/foggy-mood.png'
    case 'EMOTION5': //EMOTION5
      return '/images/cloudy-mood.png'
    case 'EMOTION6': //EMOTION6
      return '/images/typhoon-mood.png'
    default:
      return '/'
  }
}

const getMoodTags = (moodText) => {
  switch (moodText) {
    case 'JOY': 
      return ["기쁨", "설렘", "행복"]
    case 'ANGER': 
      return ["분노", "짜증", "극대노"]
    case 'SAD': 
      return ["눈물나는", "후회", "슬픔"]
    case 'TIRED': 
      return ["피곤함", "지침", "기운없음"]
    case 'CALM': 
      return ["그저 그럼", "SOSO", "덤덤"]
    case 'BLUE': 
      return ["스트레스", "우울", "숨막혀요"]
    default:
      return []
  }
}

const clearData =()=> {
  const cookiesToDelete = ['accessToken', 'nickname', 'id', 'refreshToken', 'expiresAt'];
  cookiesToDelete.forEach(cookie => {
      document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`; //즉시 삭제를 위해 파기
  });

  localStorage.removeItem('activeDate');
  localStorage.setItem('isAuthenticated', false);
  removeConfig('Authorization');

  if (window.location.pathname !== '/login') {
      window.location.href = `${import.meta.env.VITE_PUBLIC_BASE_URL}/login`; 
  }
}


export { validateEmail, validatePswd,getMoodData,getMoodIcon,getMoodTags ,getCurrentDateKor, clearData}
