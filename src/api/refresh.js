import axios from "axios";
import { Cookies } from "react-cookie";
import moment from "moment";
import { setConfig } from "./axios";

const cookies = new Cookies();

const refresh = async (config) => {
  if((localStorage.getItem('isAuthenticated')==='false')) return config;
  const refreshToken = cookies.get("refreshToken"); 
  const expireAt = cookies.get("expiresAt");
  let token = cookies.get("accessToken");
  
  // 토큰이 만료되었고, refreshToken 이 저장되어 있을 때
  if (moment(expireAt).diff(moment()) < 0 && refreshToken) {

    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/refresh`, {
      refreshToken:refreshToken,
    });
    token = response.data.accessToken;
    cookies.set("accessToken", token, { path: "/" });
    cookies.set("", moment().add(22, "minutes").format("yyyy-MM-DD HH:mm:ss"), { path: "/" });
  //console.log('갱신'+token, moment().add(22, "minutes").format("yyyy-MM-DD HH:mm:ss"))
  }
  setConfig({accessToken: token})
  config.headers["Authorization"] = `Bearer ${token}`; 
  return config;
};

const refreshErrorHandle = (err) => {
  Cookies.remove("refreshToken");
};

export { refresh, refreshErrorHandle };