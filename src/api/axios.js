import axios from 'axios'
import { refresh, refreshErrorHandle } from "./refresh";

const backend = () =>{
  // if(!((import.meta.env.VITE_PUBLIC_BASE_URL).includes('localhost')) ){
  //   return 'api'
  // }
  return import.meta.env.VITE_BACKEND_URL
}

export const be = axios.create({
  baseURL: backend(),
})

export const setConfig = ({ accessToken, contentType }) => {
  if (accessToken !==null) be.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
  if (contentType !==null) be.defaults.headers.common['Content-Type'] = contentType
}

export const removeConfig = (name) => {
  delete be.defaults.headers.common[name]
}

const handleError = (error) => {
  if (error.response.status == 401 || error.response.status == 403) {
    alert('로그인이 필요합니다')
    localStorage.setItem('isAuthenticated', false);
    localStorage.removeItem('activeDate');
    window.location.href = `${import.meta.env.VITE_PUBLIC_BASE_URL}/login`
  } else {
    throw error
  }
}

/**
 * Get Axios
 * @param {string} url
 * @param {Object} config
 * @returns Promise<response>
 */
export const Get = async (url, config) => {
  try{
    const response = await be.get(url, config)
    return response
  } catch (error) {
    //if((url.includes('diaries/month'))) throw error
    //else handleError(error)
    handleError(error)
  }
}

/**
 * Post Axios
 * @param {string} url
 * @param {Object} data
 * @param {Object} config
 * @returns Promise<response>
 */
export const Post = async (url, data, config) => {
  try {
    const response = await be.post(url, data, config)
    return response
  } catch (error) {
    if(url ==='/auth/signin' || url ==='/auth/signup'|| url ==='/auth/kakao/signin') throw error
    else handleError(error)
  }
}

/**
 * Put Axios
 * @param {string} url
 * @param {Object} data
 * @param {Object} config
 * @returns Promise<response>
 */
export const Put = async (url, data, config) => {
  try {
    const response = await be.put(url, data, config)
    return response
  } catch (error) {
    handleError(error)
  }
}

/**
 * Patch Axios
 * @param {string} url
 * @param {Object} data
 * @param {Object} config
 * @returns Promise<response>
 */
export const Patch = async (url, data, config) => {
  try {
    const response = await be.patch(url, data, config)
    return response
  } catch (error) {
    handleError(error)
  }
}

/**
 * Delete Axios
 * @param {string} url
 * @param {Object} config
 * @returns Promise<response>
 */
export const Delete = async (url, config) => {
  try {
    const response = await be.delete(url, config)
    return response
  } catch (error) {
    handleError(error)
  }
}

be.interceptors.request.use(refresh,refreshErrorHandle)

be.interceptors.response.use((res) => {
  return res
})
