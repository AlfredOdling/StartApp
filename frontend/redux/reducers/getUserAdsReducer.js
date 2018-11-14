import {
  GET_USER_ADS,
  GET_USER_ADS_SUCCESS,
  GET_USER_ADS_FAILURE,
} from '../actions/actionTypes/getUserAdsActionTypes'
import { _initialState } from './reducerUtils/utils'

const initialState = {
  ..._initialState,
}

const getUserAdsReducer = (state = initialState, action) => {
  const { type, status, data, errorMsg } = action

  switch (type) {
    case GET_USER_ADS:
      return {
        ...state,
        isFetching: true,
      }
    case GET_USER_ADS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        fetched: true,
        status,
        data,
      }
    case GET_USER_ADS_FAILURE:
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

export default getUserAdsReducer
