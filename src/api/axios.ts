import axios from 'axios';

import { BASE_URL } from '../constants/envVarables';

const createAxiosInstance = () => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
  });

  return axiosInstance;
};

export default createAxiosInstance;
