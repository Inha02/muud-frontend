import axios from 'axios';

const inst = axios.create();
inst.defaults.timeout = 10000;
inst.defaults.baseURL = import.meta.env.VITE_BACKEND_URL || import.meta.env.VITE_HOST;

export default inst;
