import { combineReducers } from 'redux';
import { userListReducer } from './users/userReducer';
import { authReducer } from './auth/authReducer';

export default combineReducers({
  auth: authReducer,
  userList: userListReducer,
});
