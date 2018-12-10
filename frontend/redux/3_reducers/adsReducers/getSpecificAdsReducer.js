import {
  GET_SPECIFIC_ADS,
  GET_SPECIFIC_ADS_SUCCESS,
  GET_SPECIFIC_ADS_FAILURE,
} from '../../1_actionTypes/adsActionTypes/getSpecificAdsActionTypes'
import _initialState from '../utils/_initialState'

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
