import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
} from './actionTypes/userActionTypes'
import { loginFB, logoutFB } from '../../utils/auth'
import { posting, postSuccess, postFailure } from './utils/postActions'

export function _login(type) {
  return async dispatch => {
    dispatch(posting(LOGIN_USER))

    let response = undefined

    if (type === 'FB') {
      response = await loginFB()
    }

    const { status, errorMsg, data } = response

    if (status !== 200) {
      dispatch(postFailure(LOGIN_USER_FAILURE, status, errorMsg))
    } else {
      dispatch(postSuccess(LOGIN_USER_SUCCESS, status, data))
    }
  }
}

export function _logout() {
  return async dispatch => {
    dispatch(posting(LOGOUT_USER))

    const response = await logoutFB()
    const { status, data } = response

    if (status !== 200) {
      dispatch(postFailure(LOGOUT_USER_FAILURE, status, data))
    } else {
      dispatch(postSuccess(LOGOUT_USER_SUCCESS, status, data))
    }
  }
}

export {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
}
