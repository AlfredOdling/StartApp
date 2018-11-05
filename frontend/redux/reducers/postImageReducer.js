import {
  POST_IMAGE,
  POST_IMAGE_SUCCESS,
  POST_IMAGE_FAILURE,
} from '../actions/actionTypes/postImageActionTypes'
import { _initialState } from './reducerUtils/utils'

const initialState = {
  ..._initialState,
}

const postImageReducer = (state = initialState, action) => {
  const { type, status, errorMsg, data, body } = action

  switch (type) {
    case POST_IMAGE:
      return {
        ...state,
        isFetching: true,
        body,
      }
    case POST_IMAGE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        fetched: true,
        status,
        data,
      }
    case POST_IMAGE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
        status,
        errorMsg,
      }

    default:
      return state
  }
}

export default postImageReducer
