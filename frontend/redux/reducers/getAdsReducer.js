import {
  GET_ADS,
  GET_ADS_SUCCESS,
  GET_ADS_FAILURE,
} from '../actions/actionTypes/getAdsActionTypes'
import { _initialState } from './reducerUtils/utils'

const initialState = {
  ..._initialState,
}

const getAdsReducer = (state = initialState, action) => {
  const { type, status, data, errorMsg } = action

  switch (type) {
    case GET_ADS:
      return {
        ...state,
        isFetching: true,
      }
    case GET_ADS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        fetched: true,
        status,
        data,
      }
    case GET_ADS_FAILURE:
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

export default getAdsReducer
