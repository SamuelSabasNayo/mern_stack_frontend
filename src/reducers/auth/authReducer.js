/* eslint-disable no-fallthrough */
import {
  AUTH_ERROR,
  USER_LOADING,
  USER_LOADED,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS
} from '../../actions/auth/type';

const initialState = {
  token: localStorage.getItem('token'),
  user: localStorage.getItem('user'),
  isAuthenticated: null,
  isLoading: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return { ...state, isLoading: true };

    case USER_LOADED:
      return { ...state, user: action.payload, isAuthenticated: true, isLoading: false };

    case USER_LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.data.session);
      localStorage.setItem('user', JSON.stringify(action.payload.data.user));
      return {
        ...state,
        ...action.payload.data,
        isAuthenticated: true,
        isLoading: false
      };

    case AUTH_ERROR:
      return { ...state, isLoading: false };

    case USER_LOGIN_FAIL:
      // localStorage.removeItem('token');
      return {
        ...state,
        // token: null,
        // user: null,
        // isAuthenticated: false,
        isLoading: false
      };

    default:
      return state;
  }
};
