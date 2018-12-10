import {
  GET_SPECIFIC_ADS,
  GET_SPECIFIC_ADS_SUCCESS,
  GET_SPECIFIC_ADS_FAILURE,
} from '../../1_actionTypes/adsActionTypes/getSpecificAdsActionTypes'
import { getting, getSuccess, getFailure } from '../utils/getActions'
import { callGet } from '../../../utils/utils'

export default function _getSpecificAds(param) {
  return async dispatch => {
    dispatch(getting(GET_SPECIFIC_ADS))

    const response = await callGet('/ads/' + param)
    const { status, data } = response

    if (status !== 200) {
      dispatch(getFailure(GET_SPECIFIC_ADS_FAILURE, status, data))
    } else {
      dispatch(getSuccess(GET_SPECIFIC_ADS_SUCCESS, status, data))
    }
  }
}

export { GET_SPECIFIC_ADS, GET_SPECIFIC_ADS_SUCCESS, GET_SPECIFIC_ADS_FAILURE }
