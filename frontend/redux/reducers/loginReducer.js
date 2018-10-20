import {
  GET_LOGIN_DATA,
  GET_LOGIN_DATA_SUCCESS,
  GET_LOGIN_DATA_FAILURE,
} from '../actions/actionTypes/userActionTypes'

import { fetchingData } from './reducerUtils/utils'

const initialState = {
  ...fetchingData,
  isLoggedIn: false,
  user: {},
}

const loginReducer = (state = initialState, action) => {
  const { body, errorMsg } = action

  switch (action.type) {
    case GET_LOGIN_DATA:
      return {
        ...state,
        user: body,
        isFetching: true,
      }
    case GET_LOGIN_DATA_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isFetching: false,
        fetched: true,
      }
    case GET_LOGIN_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
        errorMsg,
      }

    default:
      return state
  }
}

export default loginReducer
