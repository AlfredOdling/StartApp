import {
  GET_ADS,
  GET_ADS_SUCCESS,
  GET_ADS_FAILURE,
} from './actionTypes/getAdsActionTypes'
import { getting, getSuccess, getFailure } from './utils/getActions'
import { callGet } from '../../utils/utils'

export function getAds() {
  return async dispatch => {
    dispatch(getting(GET_ADS))

    const response = await callGet('/ads')
    const { status, data } = response

    if (status !== 200) {
      dispatch(getFailure(GET_ADS_FAILURE, status, data))
    } else {
      dispatch(getSuccess(GET_ADS_SUCCESS, status, data))
    }
  }
}

export { GET_ADS, GET_ADS_SUCCESS, GET_ADS_FAILURE }
