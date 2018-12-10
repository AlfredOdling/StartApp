import {
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
} from '../../1_actionTypes/userActionTypes/logoutActionTypes'

import _initialState from '../utils/_initialState'
const initialState = {
  ..._initialState,
  isLoggedIn: false,
  data: {},
}

const userReducer = (state = initialState, action) => {
  const { data } = action

  switch (action.type) {
    case LOGOUT_USER:
      // state = undefined
      return {
        ...state,
        isFetching: true,
        error: false,
        errorMsg: '',
      }
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        isFetching: false,
        fetched: true,
        error: false,
        errorMsg: '',
      }
    case LOGOUT_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
        errorMsg: data,
      }

    default:
      return state
  }
}

export default userReducer
