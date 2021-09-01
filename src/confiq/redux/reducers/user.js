const initialValue = {
  userData: {},
  userDataID: {},
  friends: [],
  friend: [],
  errorMsg: {},
};

const userReducers = (state = initialValue, action) => {
  switch (action.type) {
    case "POST_LOGIN":
      return {
        ...state,
        userData: action.payload,
      };
    case "POST_LOGIN_ERROR":
      return {
        ...state,
        errorMsg: action.payload,
      };
    case "POST_REGISTER":
      return {
        ...state,
        userData: action.payload,
      };
    case "POST_REGISTER_ERROR":
      return {
        ...state,
        errorMsg: action.payload,
      };
    case "GET_USER_BY_ID":
      return {
        ...state,
        userData: action.payload,
      };
    case "UPDATE_PROFILE":
      return {
        ...state,
        userData: action.payload,
      };
    case "GET_FRIENDS":
      return {
        ...state,
        friends: action.payload,
      };
    case "GET_FRIEND":
      return {
        ...state,
        friend: action.payload,
      };
    default:
      return state;
  }
};

export default userReducers;
