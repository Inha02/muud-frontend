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

export { validateEmail, validatePswd,getMoodData }
