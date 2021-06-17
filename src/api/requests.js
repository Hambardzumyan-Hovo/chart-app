import axios from 'axios';
const BASE_URL = 'http://beta.softberg.org/api';

const AXIOS = axios.create({
  baseURL: BASE_URL,
});

export const getCompanyNames = async () => {
  const res = await AXIOS.get('/companies');
  return res;
};

export const getDataByCompanyname = async name => {
  const res = await AXIOS.get(`/yearly/${name}`);
  return res;
};
