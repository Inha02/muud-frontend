import axios from "axios";
import { useCookies } from 'react-cookie';

export const be = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
});

export const setConfig = (accessToken)=>{

    //1
    if(accessToken) be.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    
  /*  //2
    be.interceptors.request.use(config => {
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    });
*/
}

export const clearConfig = (accessToken)=>{
    delete be.defaults.headers.common['Authorization'];    
}


/**
 * Get Axios
 * @param {string} url
 * @param {Object} config
 * @returns Promise<response>
 */
export const Get = async (url, config) => {
    const response = await be.get(url, config);

    return response.data;
};

/**
 * Post Axios
 * @param {string} url
 * @param {Object} data
 * @param {Object} config
 * @returns Promise<response>
 */
export const Post = async (url, data, config) => {
    const response = await be.post(url, data, config);
    return response;
};

/**
 * Put Axios
 * @param {string} url
 * @param {Object} data
 * @param {Object} config
 * @returns Promise<response>
 */
export const Put = async (url, data, config) => {
    const response = await be.put(url, data, config);

    return response.data;
};

/**
 * Patch Axios
 * @param {string} url
 * @param {Object} data
 * @param {Object} config
 * @returns Promise<response>
 */
export const Patch = async (url, data, config) => {
    const response = await be.patch(url, data, config);

    return response.data;
};

/**
 * Delete Axios
 * @param {string} url
 * @param {Object} config
 * @returns Promise<response>
 */
export const Delete = async (url, config) => {
    const response = await be.delete(url, config);

    return response.data;
};


be.interceptors.request.use((config) => {

    return config;

});

be.interceptors.response.use((res) => {
    return res;
});
