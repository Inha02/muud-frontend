import axios from "axios";
import { Cookies } from "react-cookie";
import moment from "moment";
import { setConfig } from "./axios";

const cookies = new Cookies();

const refresh = async (config) => {
  //미로그인 시 
  if((localStorage.getItem('isAuthenticated')==='false')) return config;

  const refreshToken = cookies.get("refreshToken"); 
  const expireAt = cookies.get("expiresAt");
  let token = cookies.get("accessToken");

  // 토큰이 만료되었고, refreshToken 이 저장되어 있을 때
  if (moment(expireAt).diff(moment()) <= 0 && refreshToken) {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/refresh`, {
      refreshToken:refreshToken,
    });
    token = response.data.accessToken;
    cookies.set("accessToken", token, { path: "/" });
    cookies.set("expiresAt", moment().add(15, "minutes").format("yyyy-MM-DD HH:mm:ss"), { path: "/" });
  //console.log('갱신'+token +' '+ moment().add(15, "minutes").format("yyyy-MM-DD HH:mm:ss"))
  }
  setConfig({accessToken: token})
  config.headers["Authorization"] = `Bearer ${token}`; 
  return config;
};

const refreshErrorHandle = (error) => {
  console.error('Error Interceptor:', error);
  Cookies.remove("refreshToken");

   // 오류를 반환
   return Promise.reject(error);
};

export { refresh, refreshErrorHandle };