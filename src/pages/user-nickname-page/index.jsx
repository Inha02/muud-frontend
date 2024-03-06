import { useEffect, useState } from 'react'
import { Patch } from '../../api/axios';
import { useUserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import UserNicknamePageView from './user-nickname-page'

const UserNicknamePage = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['accessToken', 'refreshToken', 'id', 'nickname']);
  const [nickname, setNickname] = useState('')
  const [isBtnActive, setIsBtnActive] = useState(false)
  const navigateTo = useNavigate();

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
    updateNicknameAxios()
  }

  const updateNicknameAxios = async () => {
    try {
      const response = await Patch(`/users/${cookies.id}/nickname`, {
        nickname: nickname
      });
      console.log(response)
      navigateTo('/introduce');

    } catch (error) {
      /*
      modalOpen({
        content: ('실패했습니다.'),
      })
*/
    }
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
