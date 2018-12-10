import {
  POST_AD,
  POST_AD_SUCCESS,
  POST_AD_FAILURE,
} from '../../1_actionTypes/adsActionTypes/postAdActionTypes'
import _initialState from '../utils/_initialState'

const initialState = {
  ..._initialState,
}

const postAdReducer = (state = initialState, action) => {
  const { type, status, errorMsg, body, data } = action

  switch (type) {
    case POST_AD:
      return {
        ...state,
        isFetching: true,
        body,
      }
    case POST_AD_SUCCESS:
      return {
        ...state,
        isFetching: false,
        fetched: true,
        status,
        data,
      }
    case POST_AD_FAILURE:
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

export default postAdReducer
