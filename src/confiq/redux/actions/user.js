/* eslint-disable no-sequences */
import { default as axios } from "../../axiosConfiq";
// import { BASE_URL } from "../../configs/db";

import io from "socket.io-client";

export const login = (body, history, setSocket) => (dispatch) => {
  axios
    .post(`/auth/login/`, body)
    .then((result) => {
      const userData = result.data.result;

      dispatch({ type: "POST_LOGIN", payload: userData });
      localStorage.setItem("KEY_TOKEN", userData.token);
      const resultSocket = io(process.env.REACT_APP_API_URL, {
        query: {
          token: localStorage.getItem("KEY_TOKEN"),
        },
      });
      setSocket(resultSocket);
      history.push("/");
    })
    .catch((error) => {
      return alert(error?.response?.data?.message || "login gagal");
    });
};
export const register = (body, history) => (dispatch) => {
  axios
    .post(`/auth/register/`, body)
    .then((result) => {
      const userData = result?.data?.result;
      return (
        alert("Register Success, Check mail to active your account"),
        dispatch({ type: "POST_REGISTER", payload: userData }),
        history.push("/login")
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
      dispatch({ type: "UPDATE_PROFILE", payload: newData });
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
      dispatch({ type: "GET_USER_BY_ID", payload: data });
    })
    .catch((error) => {
      alert(error);
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
