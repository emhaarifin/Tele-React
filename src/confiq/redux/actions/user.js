/* eslint-disable no-sequences */
import { default as axios } from '../../axiosConfiq';
// import { BASE_URL } from "../../configs/db";
import { toastify } from '@/utils';

import io from 'socket.io-client';

export const login = (body, history, setSocket) => (dispatch) => {
  axios
    .post(`/auth/login/`, body)
    .then((result) => {
      const userData = result.data.result;
      dispatch({ type: 'POST_LOGIN', payload: userData });
      localStorage.setItem('KEY_TOKEN', userData.token);
      localStorage.setItem('ID_USER', userData.id);
      localStorage.setItem('REFRESH_TOKEN', userData.refreshToken);
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
      console.log(result, 'result update');
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
      console.log(result, 'result dari redux');
      const data = result.data.result[0];
      dispatch({ type: 'GET_USER_BY_ID', payload: data });
    })
    .catch((error) => {
      console.log(error.response, 'ini eor');
      toastify(error);
    });
};

// export const getFriends = () => (dispatch) => {
//   axios
//     .get("/auth/friend/", {
//       headers: {
//         authorization: `Bearer ${localStorage.getItem("KEY_TOKEN")}`,
//       },
//     })
//     .then((res) => {
//       const dataUsers = res.data.result;
//       dispatch({ type: "GET_FRIENDS", payload: dataUsers });
//     })
//     .catch((error) => {
//       console.log(error, "eror get friends");
//     });
// };

// export const getFriend = (receiver_id, setMessages) => (dispatch) => {
//   axios
//     .get(`/messages/${receiver_id}`, {
//       headers: {
//         authorization: `Bearer ${localStorage.getItem("KEY_TOKEN")}`,
//       },
//     })
//     .then((res) => {
//       const resultMsg = res.data.result;
//       console.log(res, "cek message dari redux");
//       dispatch({ type: "GET_FRIEND", payload: resultMsg });
//       setMessages(resultMsg);
//     })
//     .catch((err) => {
//       console.log(err, "error dari get friend");
//     });
// };
