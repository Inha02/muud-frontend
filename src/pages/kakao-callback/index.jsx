import { useEffect, useState } from 'react'
import { Post } from '../../api/axios';
import { useUserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';


const KakaoCallback = (props) => {
  const navigateTo = useNavigate();
  const { modalOpen } = useModal();

  const kakaoAxios = async (code) => {
    console.log(code)
    try {
      const response = await Post('/auth/kakao/signin', {
        code: code
      });
      console.log('카카오 로그인 성공 응답' + response.refreshToken)

      const { accessToken, refreshToken, userInfo } = response;
      navigateTo('/home');



      //201 일시 가입완료

    } catch (error) {
      console.log('에러')
      console.log(error.response)

      /*
                modalOpen({
                  content: ('요청이 실패하였습니다.'),
                  link:'/login'
                })
                */
    }

  }

  useEffect(() => {
    const params = new URL(document.URL).searchParams;
    const code = params.get("code");
    kakaoAxios(code);
  }, []);

  return (
    <>잠시만 기다려 주세요! 로그인 중입니다.</>
  )

}

export default KakaoCallback;