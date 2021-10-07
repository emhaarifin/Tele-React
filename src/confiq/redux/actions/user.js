/* eslint-disable no-sequences */
import { default as axios } from '../../axiosConfiq';
// import { BASE_URL } from "../../configs/db";
import { toastify } from '@/utils';

import io from 'socket.io-client';

export const login = (body, history, setSocket) => (dispatch) => {
  axios
    .post(`/auth/login/`, body)
    .then(async (result) => {
      const userData = result.data.result;
      localStorage.setItem('KEY_TOKEN', userData.token);
      localStorage.setItem('ID_USER', userData.id);
      localStorage.setItem('REFRESH_TOKEN', userData.refreshToken);
      dispatch({ type: 'POST_LOGIN', payload: userData });
      const resultSocket = io(process.env.REACT_APP_API_URL, {
        query: {
          token: localStorage.getItem('KEY_TOKEN'),
        },
      });
      setSocket(resultSocket);
      history.push('/');
    })
    .catch((error) => {
      const message = error?.response?.data?.message || 'login gagal';
      toastify(message);
    });
};
export const register = (body, history) => (dispatch) => {
  axios
    .post(`/auth/register/`, body)
    .then((result) => {
      const userData = result?.data?.result;
      const message = result?.data?.message || 'Register Success, Check mail to active your account';
      return dispatch({ type: 'POST_REGISTER', payload: userData }), toastify(message), history.push('/login');
    })
    .catch((error) => {
      const message = error?.response?.data?.message || 'Register Gagal';
      toastify(message);
    });
};

export const updateProfile = (data) => (dispatch) => {
  const newData = new FormData();
  newData.append('avatar', data.avatar);
  newData.append('phone_number', data.phone_number);
  newData.append('bio', data.bio);
  axios
    .put(`/auth/profile/`, newData, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('KEY_TOKEN')}`,
      },
    })
    .then((result) => {
      dispatch({ type: 'UPDATE_PROFILE' });
      toastify('Sukses update profile');
    })
    .catch((error) => {
      const message = error?.response?.data?.message || 'gagal update data';
      toastify(message);
    });
};
export const getUserById = (id) => (dispatch) => {
  axios
    .get(`/auth/profile/`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('KEY_TOKEN')}`,
      },
    })
    .then((result) => {
      const data = result.data.result[0];
      dispatch({ type: 'GET_USER_BY_ID', payload: data });
    })
    .catch((error) => {
      toastify(error);
    });
};
