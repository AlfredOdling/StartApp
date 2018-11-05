import {
  POST_AD,
  POST_AD_SUCCESS,
  POST_AD_FAILURE,
} from './actionTypes/postAdActionTypes'
import { posting, postSuccess, postFailure } from './utils/postActions'
import { callPost } from '../../utils/utils'

export function postAd(body) {
  return async dispatch => {
    dispatch(posting(POST_AD, body))

    const response = await callPost('/upload_ad', body)
    const { status, data } = response

    if (status !== 200) {
      dispatch(postFailure(POST_AD_FAILURE, status, data))
    } else {
      dispatch(postSuccess(POST_AD_SUCCESS, status, data))
    }
  }
}

export { POST_AD, POST_AD_SUCCESS, POST_AD_FAILURE }
