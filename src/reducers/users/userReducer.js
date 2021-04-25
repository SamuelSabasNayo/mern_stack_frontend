import { USER_LIST_ERROR, USER_LIST_LOADING, USER_LIST_SUCCESS } from '../../actions/users/types';

const initialState = { users: [] };

export const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LIST_LOADING:
      return { ...state, isLoading: true };

    case USER_LIST_SUCCESS:
      return { users: action.payload, isLoading: false };

    case USER_LIST_ERROR:
      return { error: action.payload, isLoading: false };

    default:
      return state;
  }
};
