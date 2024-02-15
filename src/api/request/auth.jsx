import axios from '../axios';

const SUB_DIR = '/auth';

const kakaoLogin = async (code) => await axios.get(`${SUB_DIR}/kakao`, { params: { code } });

/*
const getInfo = async (nm, birth) => await axios.post(`${SUB_DIR}`, { nm, birth });

*/
export { kakaoLogin };