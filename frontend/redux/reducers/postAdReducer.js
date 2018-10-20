import {
  POST_AD,
  POST_AD_SUCCESS,
  POST_AD_FAILURE,
} from '../actions/actionTypes/postAdActionTypes'
import { _initialState } from './reducerUtils/utils'

const initialState = {
  ..._initialState,
}

const postAddReducer = (state = initialState, action) => {
  const { type, status, errorMsg } = action

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
        status,
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

export default postAddReducer
