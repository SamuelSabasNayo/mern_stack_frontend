/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { config } from 'dotenv';
import { USER_LIST_ERROR, USER_LIST_LOADING, USER_LIST_SUCCESS } from './types';

config();
const { REACT_APP_BACKEND_URL } = process.env;

export const listUsers = () => async (dispatch) => {
  try {
    dispatch({ type: USER_LIST_LOADING });

    const { data } = await axios.get(`${REACT_APP_BACKEND_URL}/user/view-users`);
    // console.log(data);

    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: USER_LIST_ERROR,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    });
  }
};
