import {
  UPDATES_AD_EMPLOYEES,
  UPDATES_AD_EMPLOYEES_SUCCESS,
  UPDATES_AD_EMPLOYEES_FAILURE,
} from '../../1_actionTypes/adsActionTypes/updateAdEmployeesActionTypes'
import _initialState from '../utils/_initialState'

const initialState = {
  ..._initialState,
}

const updateAdEmployeesReducer = (state = initialState, action) => {
  const { type, status, errorMsg, body, data } = action

  switch (type) {
    case UPDATES_AD_EMPLOYEES:
      return {
        ...state,
        isFetching: true,
        body,
      }
    case UPDATES_AD_EMPLOYEES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        fetched: true,
        status,
        data,
      }
    case UPDATES_AD_EMPLOYEES_FAILURE:
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

export default updateAdEmployeesReducer
