import {
  POST_AD,
  POST_AD_SUCCESS,
  POST_AD_FAILURE,
} from '../actions/actionTypes/postAdActionTypes'
import { _initialState } from './reducerUtils/utils'

const initialState = {
  ..._initialState,
  postAdStatus: {},
}

const postAddReducer = (state = initialState, action) => {
  const { type, data, errorMsg } = action

  switch (type) {
    case POST_AD:
      return {
        ...state,
        isFetching: true,
      }
    case POST_AD_SUCCESS:
      return {
        ...state,
        isFetching: false,
        fetched: true,
        postAdStatus: data,
      }
    case POST_AD_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
        errorMsg: errorMsg,
      }

    default:
      return state
  }
}

export default postAddReducer
