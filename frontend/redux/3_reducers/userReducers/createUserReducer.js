import {
  CREATE_USER_IN_DB,
  CREATE_USER_IN_DB_SUCCESS,
  CREATE_USER_IN_DB_FAILURE,
} from '../../1_actionTypes/userActionTypes/createUserActionTypes'

import _initialState from '../utils/_initialState'

const initialState = {
  ..._initialState,
  data: {},
}

const createUserReducer = (state = initialState, action) => {
  const { data } = action

  switch (action.type) {
    case CREATE_USER_IN_DB:
      return {
        ...state,
        data,
        isFetching: true,
        error: false,
        errorMsg: '',
      }
    case CREATE_USER_IN_DB_SUCCESS:
      return {
        ...state,
        data,
        isFetching: false,
        fetched: true,
        error: false,
        errorMsg: '',
      }
    case CREATE_USER_IN_DB_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
        errorMsg: data,
      }

    default:
      return state
  }
}

export default createUserReducer
