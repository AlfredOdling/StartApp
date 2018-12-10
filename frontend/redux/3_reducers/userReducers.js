import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage'

import createUserReducer from './userReducers/createUserReducer'
import loginReducer from './userReducers/loginReducer'
import logoutReducer from './userReducers/logoutReducer'

const configLogin = { key: 'loginReducer', storage }

const userReducers = combineReducers({
  createUserReducer,
  loginReducer: persistReducer(configLogin, loginReducer),
  logoutReducer,
})

export default userReducers
