const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return regex.test(email)
}
const validatePswd = (pswd) => {
  return pswd.length >= 8 && pswd.length <= 15
}

const getMoodImg = (mood) => {
  switch (mood) {
    case 'NORMAL':
      return '/images/cloudy-mood.png'
    case 'FOGGY':
      return '/images/foggy-mood.png'
    case 'HAPPY':
      return '/images/sunny-mood.png'
    case 'ANGER':
      return '/images/thunder-mood.png'
    case 'STRESS':
      return '/images/typhoon-mood.png'
    case 'SAD':
      return '/images/rainy-mood.png'
    default:
      return '/'
  }
}

export { validateEmail, validatePswd,getMoodImg }
