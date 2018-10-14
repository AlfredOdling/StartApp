import {
  POST_AD,
  POST_AD_SUCCESS,
  POST_AD_FAILURE,
} from './actionTypes/postAdActionTypes'
import { posting, postSuccess, postFailure } from './utils/postActions'
import { callPost } from '../../utils/utils'

export function postAd(body) {
  return async (dispatch) => {
    dispatch(posting(POST_AD, body))

    const status = await callPost('/upload_ad', body)
    if (status === 200) {
      dispatch(postSuccess(POST_AD_SUCCESS))
    } else {
      dispatch(postFailure(POST_AD_FAILURE, error))
    }
  }
}

export {
  POST_AD,
  POST_AD_SUCCESS,
  POST_AD_FAILURE,
}
