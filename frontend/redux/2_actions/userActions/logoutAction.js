import {
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
} from '../../1_actionTypes/userActionTypes/logoutActionTypes'
import { logoutFB } from '../../../utils/auth'
import { posting, postSuccess, postFailure } from '../utils/postActions'

export default function _logout() {
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

export { LOGOUT_USER, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILURE }
