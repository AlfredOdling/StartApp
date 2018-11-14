import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
} from '../actions/actionTypes/userActionTypes'

import { fetchingData } from './reducerUtils/utils'

const initialState = {
  ...fetchingData,
  isLoggedIn: false,
  data: {},
}

const userReducer = (state = initialState, action) => {
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
    case LOGOUT_USER:
      state = undefined
    // return {
    //   ...state,
    //   isFetching: true,
    //   error: false,
    //   errorMsg: '',
    // }
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
