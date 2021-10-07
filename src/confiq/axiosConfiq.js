import axios from 'axios';
import { store } from './redux/store';

const axiosConfig = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axiosConfig.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    const { message, statusCode } = error.response.data;
    if (statusCode === 401 && message === 'token expired' && !originalRequest._retry) {
      const refreshToken = localStorage.getItem('refreshToken');
      try {
        originalRequest._retry = true;
        const data = await axios.post(`${process.env.REACT_APP_API_URL}/auth/refreshToken`, {
          refreshToken,
        });
        error.config.headers['Authorization'] = 'Bearer ' + data.result.refreshToken;
        return axiosConfig(originalRequest);
      } catch (error) {
        store.dispatch({ type: 'LOGOUT' });
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default axiosConfig;
