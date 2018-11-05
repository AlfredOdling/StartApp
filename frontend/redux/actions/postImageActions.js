import {
  POST_IMAGE,
  POST_IMAGE_SUCCESS,
  POST_IMAGE_FAILURE,
} from './actionTypes/postImageActionTypes'
import { posting, postSuccess, postFailure } from './utils/postActions'
import { NavigationActions } from 'react-navigation'
import { uploadImageAsync } from '../../utils/utils'

export function postImage(pickerResult) {
  return async dispatch => {
    dispatch(posting(POST_IMAGE, pickerResult))

    if (pickerResult.cancelled) {
      dispatch(postFailure(POST_IMAGE_FAILURE))
      return
    }

    response = await uploadImageAsync(pickerResult.uri)
    const { status, errorMsg, data } = response

    if (status !== 200) {
      dispatch(postFailure(POST_IMAGE_FAILURE, status, errorMsg))
    } else {
      dispatch(postSuccess(POST_IMAGE_SUCCESS, status, data.location))
    }
  }
}

export { POST_IMAGE, POST_IMAGE_SUCCESS, POST_IMAGE_FAILURE }
