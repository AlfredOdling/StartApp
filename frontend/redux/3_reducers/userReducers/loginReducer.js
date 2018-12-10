import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from '../../1_actionTypes/userActionTypes/loginActionTypes'

import _initialState from '../utils/_initialState'
const initialState = {
  ..._initialState,
  isLoggedIn: false,
  data: {},
}

const loginReducer = (state = initialState, action) => {
  const { data } = action

  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        data,
        isFetching: true,
        error: false,
        errorMsg: '',
      }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        data,
        isLoggedIn: true,
        isFetching: false,
        fetched: true,
        error: false,
        errorMsg: '',
      }
    case LOGIN_USER_FAILURE:
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

export default loginReducer
