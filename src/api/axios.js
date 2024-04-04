import axios from 'axios'
import { refresh, refreshErrorHandle } from "./refresh";
import { clearData } from '../utils';

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

/**
 * Get Axios
 * @param {string} url
 * @param {Object} config
 * @returns Promise<response>
 */
export const Get = async (url, config) => {
    const response = await be.get(url, config)
    return response
}

/**
 * Post Axios
 * @param {string} url
 * @param {Object} data
 * @param {Object} config
 * @returns Promise<response>
 */
export const Post = async (url, data, config) => {
    const response = await be.post(url, data, config)
    return response
}

/**
 * Put Axios
 * @param {string} url
 * @param {Object} data
 * @param {Object} config
 * @returns Promise<response>
 */
export const Put = async (url, data, config) => {
    const response = await be.put(url, data, config)
    return response
}

/**
 * Patch Axios
 * @param {string} url
 * @param {Object} data
 * @param {Object} config
 * @returns Promise<response>
 */
export const Patch = async (url, data, config) => {
    const response = await be.patch(url, data, config)
    return response
}

/**
 * Delete Axios
 * @param {string} url
 * @param {Object} config
 * @returns Promise<response>
 */
export const Delete = async (url, config) => {
    const response = await be.delete(url, config)
    return response
}

be.interceptors.request.use(refresh,refreshErrorHandle)

be.interceptors.response.use((response) => {
  return response;
}, (error) => {
  const url = error.config.url
  if(url.includes('/auth/signin') || url.includes('/auth/signup')|| url.includes('/auth/kakao/signin')) throw error
  else {
    if (error.response.status == 401 || error.response.status == 403) {
      clearData();
      alert('로그인이 필요합니다')
      return Promise.reject(error)
    } else {
      throw error
    }
  }
})
