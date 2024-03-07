import axios from 'axios'
import { useCookies } from 'react-cookie'

export const be = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
})

export const setConfig = ({ accessToken, contentType }) => {
  //1
  if (accessToken)
    be.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
  if (contentType) be.defaults.headers.common['Content-Type'] = contentType
  /*  //2
    be.interceptors.request.use(config => {
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        if (contentType) {
            config.headers['Content-Type'] = contentType;
        }
        return config;
    });
*/
}

export const clearConfig = (name) => {
  delete be.defaults.headers.common[name]
}

/**
 * Get Axios
 * @param {string} url
 * @param {Object} config
 * @returns Promise<response>
 */
export const Get = async (url, config) => {
  try {
    const response = await be.get(url, config)
    return response
  } catch (error) {
    console.log(error.response.status)
    if (error.response.status == 401 || error.response.status == 403) {
      window.location.href = `${import.meta.env.VITE_HOST}/login`
    } else {
      throw error
    }
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
    console.log(error.response.status)
    if (error.response.status == 401 || error.response.status == 403) {
        alert(error.response.message)
      window.location.href = `${import.meta.env.VITE_HOST}/login`
    } else {
      throw error
    }
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
  try {
    const response = await be.patch(url, data, config)

    return response
  } catch (error) {
    console.log(error.response.status)
    if (error.response.status == 401 || error.response.status == 403) {
      window.location.href = `${import.meta.env.VITE_HOST}/login`
    } else {
      throw error
    }
  }
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

be.interceptors.request.use((config) => {
  return config
})

be.interceptors.response.use((res) => {
  return res
})
