import {
  GET_USER_ADS,
  GET_USER_ADS_SUCCESS,
  GET_USER_ADS_FAILURE,
} from '../../1_actionTypes/adsActionTypes/getUserAdsActionTypes'
import { getting, getSuccess, getFailure } from '../utils/getActions'
import { callGet } from '../../../utils/utils'

export default function _getUserAds() {
  return async dispatch => {
    dispatch(getting(GET_USER_ADS))

    const response = await callGet('/ads')
    const { status, data } = response

    if (status !== 200) {
      dispatch(getFailure(GET_USER_ADS_FAILURE, status, data))
    } else {
      dispatch(getSuccess(GET_USER_ADS_SUCCESS, status, data))
    }
  }
}

export { GET_USER_ADS, GET_USER_ADS_SUCCESS, GET_USER_ADS_FAILURE }
