import { useEffect, useState } from 'react'
import UserNicknamePageView from './user-nickname-page'

const UserNicknamePage = () => {
  const [nickname, setNickname] = useState('')
  const [isBtnActive, setIsBtnActive] = useState(false)

  const onChangeNickname = (event) => {
    setNickname(event.target.value)
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
