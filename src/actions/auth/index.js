/* eslint-disable prefer-destructuring */
import axios from 'axios';
import {
  AUTH_ERROR,
  USER_LOADED,
  USER_LOADING,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS
} from './type';

const { REACT_APP_BACKEND_URL } = process.env;

// Login user
export const login = (email, password) => async (dispatch) => {
  try {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    // Request body
    const body = JSON.stringify({ email, password });

    const res = await axios.post(`${REACT_APP_BACKEND_URL}/auth/login-user`, body, config);
    // console.log(res.data);
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    // console.log(error.message);
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    });
  }
};

// Check token & Load user
export const loadUser = () => (dispatch, getState) => {
  try {
    // user loading
    dispatch({ typpe: USER_LOADING });

    // Get token from state
    // const token = getState().auth.token;
    const data = getState().auth;
    // console.log(data);

    // Headers
    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // };

    // If token, add headers config
    // if (token) {
    // eslint-disable-next-line dot-notation
    // config.headers['Authorization'] = `${token}`;
    // }

    // const res = axios.get(`${REACT_APP_BACKEND_URL}/user`, config);
    dispatch({
      type: USER_LOADED,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    });
  }
};
