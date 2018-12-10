import {
  CREATE_USER_IN_DB,
  CREATE_USER_IN_DB_SUCCESS,
  CREATE_USER_IN_DB_FAILURE,
} from '../../1_actionTypes/userActionTypes/createUserActionTypes'
import { posting, postSuccess, postFailure } from '../utils/postActions'
import { callPost } from '../../../utils/utils'
import _login from './loginAction'

export default function _createUser(type) {
  return async (dispatch, getState) => {
    dispatch(posting(CREATE_USER_IN_DB))

    await dispatch(_login(type))

    const {
      user_id,
      user_full_name,
    } = getState().userReducers.loginReducer.data
    let route = '/post_user'
    let body = {
      user_id,
      user_full_name,
    }

    const response = await callPost(route, body)

    const { status, data } = response

    if (status !== 200) {
      dispatch(postFailure(CREATE_USER_IN_DB_FAILURE, status, data))
    } else {
      dispatch(postSuccess(CREATE_USER_IN_DB_SUCCESS, status, data))
    }
  }
}

export {
  CREATE_USER_IN_DB,
  CREATE_USER_IN_DB_SUCCESS,
  CREATE_USER_IN_DB_FAILURE,
}
