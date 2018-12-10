import {
  UPDATES_AD_EMPLOYEES,
  UPDATES_AD_EMPLOYEES_SUCCESS,
  UPDATES_AD_EMPLOYEES_FAILURE,
} from '../../1_actionTypes/adsActionTypes/updateAdEmployeesActionTypes'
import { posting, postSuccess, postFailure } from '../utils/postActions'
import { callPost } from '../../../utils/utils'

export default function updateAdEmployees(body) {
  return async dispatch => {
    dispatch(posting(UPDATES_AD_EMPLOYEES, body))

    const response = await callPost('/update_ad_employees', body)
    const { status, data } = response

    if (status !== 200) {
      dispatch(postFailure(UPDATES_AD_EMPLOYEES_FAILURE, status, data))
    } else {
      dispatch(postSuccess(UPDATES_AD_EMPLOYEES_SUCCESS, status, data))
    }
  }
}

export {
  UPDATES_AD_EMPLOYEES,
  UPDATES_AD_EMPLOYEES_SUCCESS,
  UPDATES_AD_EMPLOYEES_FAILURE,
}
