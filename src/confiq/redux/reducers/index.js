import { combineReducers } from 'redux';
import userReducers from './user';

const reducers = combineReducers({
  user: userReducers,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    localStorage.clear()
    return reducers(undefined, action);
  }
  return reducers(state, action);
};

export default rootReducer;
