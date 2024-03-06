import {moodDataArray} from './constants/testData'

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

/*
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
*/

export { validateEmail, validatePswd,getMoodData,getMoodIcon }
