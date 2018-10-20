import {
  GET_LOGIN_DATA,
  GET_LOGIN_DATA_SUCCESS,
  GET_LOGIN_DATA_FAILURE,
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
} from './actionTypes/userActionTypes'
import { checkAuth } from '../../utils/auth'
import { posting, postSuccess, postFailure } from './utils/postActions'

export function _login() {
  return async dispatch => {
    dispatch(posting(GET_LOGIN_DATA))

    const response = await checkAuth()
    const { status, errorMsg, data } = response

    if (status !== 200) {
      dispatch(postFailure(GET_LOGIN_DATA_FAILURE, status, errorMsg))
    } else {
      dispatch(postSuccess(GET_LOGIN_DATA_SUCCESS, status, data))
    }
  }
}

export {
  GET_LOGIN_DATA,
  GET_LOGIN_DATA_SUCCESS,
  GET_LOGIN_DATA_FAILURE,
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
}
