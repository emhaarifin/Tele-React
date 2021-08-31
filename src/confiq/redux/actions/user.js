/* eslint-disable no-sequences */
import { default as axios } from '../../axiosConfiq';
// import { BASE_URL } from "../../configs/db";

export const login = (body, history) => (dispatch) => {
  axios
    .post(`/auth/login/`, body)
    .then((result) => {
      const userData = result.data.result;
      return (
        alert(result?.data?.message),
        dispatch({ type: 'POST_LOGIN', payload: userData }),
        localStorage.setItem('KEY_TOKEN', userData.token),
        history.push('/')
      );
    })
    .catch((error) => {
      return alert(error?.response?.data?.message);
    });
};
export const register = (body, history) => (dispatch) => {
  axios
    .post(`/auth/register/`, body)
    .then((result) => {
      const userData = result?.data?.result;
      console.log(userData);
      return (
        alert('Register Success, Check mail to active your account'),
        dispatch({ type: 'POST_REGISTER', payload: userData }),
        history.push('/login')
      );
    })
    .catch((error) => {
      return alert(error?.response?.data?.message);
    });
};

export const updateProfile = (id, data) => (dispatch) => {
  axios
    .put(`/auth/profile/update/${id}`, data)
    .then((result) => {
      const newData = result.data.result;
      dispatch({ type: 'UPDATE_PROFILE', payload: newData });
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};
export const getUserById = (id) => (dispatch) => {
  axios
    .get(`/auth/profile/${id}`)
    .then((result) => {
      const data = result.data.result[0];
      dispatch({ type: 'GET_USER_BY_ID', payload: data });
    })
    .catch((error) => {
      alert(error);
    });
};
