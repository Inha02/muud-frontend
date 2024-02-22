import { useEffect, useState } from 'react'
import UserNicknamePageView from './user-nickname-page'

const UserNicknamePage = () => {
  const [nickname, setNickname] = useState('')
  const [isBtnActive, setIsBtnActive] = useState(false)

  const onChangeNickname = (event) => {
    const value = event.target.value.replace(/\s/g, ''); // 입력값에서 공백 제거    
    setNickname(value.slice(0, 10));

    if (event.target.value !== '') {
      setIsBtnActive(true)
    } else {
      setIsBtnActive(false)
    }
  }

  const handleClick = () => {

  }

  return (
    <UserNicknamePageView
      nickname={nickname}
      onChangeNickname={onChangeNickname}
      isBtnActive={isBtnActive}
      handleClick={handleClick}
    />
  )
}

export default UserNicknamePage
