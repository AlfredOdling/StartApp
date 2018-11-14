import {
  GET_SPECIFIC_ADS,
  GET_SPECIFIC_ADS_SUCCESS,
  GET_SPECIFIC_ADS_FAILURE,
} from '../actions/actionTypes/getSpecificAdsActionTypes'
import { _initialState } from './reducerUtils/utils'

const initialState = {
  ..._initialState,
}

const getSpecificAdsReducer = (state = initialState, action) => {
  const { type, status, data, errorMsg } = action

  switch (type) {
    case GET_SPECIFIC_ADS:
      return {
        ...state,
        isFetching: true,
      }
    case GET_SPECIFIC_ADS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        fetched: true,
        status,
        data,
      }
    case GET_SPECIFIC_ADS_FAILURE:
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

export default getSpecificAdsReducer
