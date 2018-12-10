import { combineReducers } from 'redux'

import getAdsReducer from './adsReducers/getAdsReducer'
import getSpecificAdsReducer from './adsReducers/getSpecificAdsReducer'
import getUserAdsReducer from './adsReducers/getUserAdsReducer'
import postAdReducer from './adsReducers/postAdReducer'
import showAdReducer from './adsReducers/showAdReducer'
import updateAdEmployeesReducer from './adsReducers/updateAdEmployeesReducer'

const adsReducers = combineReducers({
  getAdsReducer,
  getSpecificAdsReducer,
  getUserAdsReducer,
  postAdReducer,
  showAdReducer,
  updateAdEmployeesReducer,
})

export default adsReducers
