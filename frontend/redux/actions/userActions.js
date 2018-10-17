import {
  GET_LOGIN_DATA,
  GET_LOGIN_DATA_SUCCESS,
  GET_LOGIN_DATA_FAILURE,
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
} from './actionTypes/userActionTypes'
import { login, createUser } from '../../utils/Auth'
import { getting, getSuccess, getFailure } from './utils/getActions'


export function _login(type, email, password) {
  return async (dispatch) => {

    const body = {
      type,
      email,
      password
    }
    dispatch(getting(body))

    await login(type, email, password).then((data) => {
      if (!data.error) {
        dispatch(getSuccess())
      }
    }).catch((error) => {
      dispatch(getFailure(error))
    })
  }
}

export function _createUser(type, email, password) {
  return async (dispatch) => {
    const body = {
      type,
      email,
      password
    }
    dispatch(posting(CREATE_USER, body))

    const response = await createUser('/upload_ad', body)
    const {
      status,
      errorMsg,
      data
    } = response

    if (status !== 200) {
      dispatch(postFailure(CREATE_USER_FAILURE, status, errorMsg))
    } else {
      dispatch(postSuccess(CREATE_USER_SUCCESS, status, data))
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
