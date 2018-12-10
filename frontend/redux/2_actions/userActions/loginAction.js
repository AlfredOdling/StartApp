import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from '../../1_actionTypes/userActionTypes/loginActionTypes'
import { loginFB } from '../../../utils/utils'
import { posting, postSuccess, postFailure } from '../utils/postActions'

export default function _login(type) {
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

export { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE }
