import {
  GET_LOGIN_DATA,
  GET_LOGIN_DATA_SUCCESS,
  GET_LOGIN_DATA_FAILURE,
} from './actionTypes/loginActionTypes'
import { login } from '../../utils/static/Auth'

export function _login(type, email, password) {
  dispatch(getLoginData(type, email, password))
  dispatch(getLoginDataSuccess())

  // return async (dispatch) => {
  //   dispatch(getLoginData(type, email, password))

  //   await login(type, email, password).then((data) => {
  //     if (!data.error) {
  //       dispatch(getLoginDataSuccess())
  //     }
  //   }).catch((error) => {
  //     dispatch(getLoginDataFailure(error))
  //   })
  // }
}

export function getLoginData(type, email, password) {
  return {
    type: GET_LOGIN_DATA,
    body: {
      type,
      email,
      password
    }
  }
}

export function getLoginDataSuccess() {
  return {
    type: GET_LOGIN_DATA_SUCCESS,
    // data,
  }
}

export function getLoginDataFailure(errorMsg) {
  return {
    type: GET_LOGIN_DATA_FAILURE,
    errorMsg
  }
}

export {
  GET_LOGIN_DATA,
  GET_LOGIN_DATA_SUCCESS,
  GET_LOGIN_DATA_FAILURE,
}
