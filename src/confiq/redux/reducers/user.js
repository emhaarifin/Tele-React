const initialValue = {
  userData: {},
  userDataID: {},
  errorMsg: {},
};

const userReducers = (state = initialValue, action) => {
  switch (action.type) {
    case 'POST_LOGIN':
      return {
        ...state,
        userData: action.payload,
      };
    case 'POST_LOGIN_ERROR':
      return {
        ...state,
        errorMsg: action.payload,
      };
    case 'POST_REGISTER':
      return {
        ...state,
        userData: action.payload,
      };
    case 'POST_REGISTER_ERROR':
      return {
        ...state,
        errorMsg: action.payload,
      };
    case 'GET_USER_BY_ID':
      return {
        ...state,
        userData: action.payload,
      };
    case 'UPDATE_PROFILE':
      return {
        ...state,
        userData: action.payload,
      };

    default:
      return state;
  }
};

export default userReducers;
