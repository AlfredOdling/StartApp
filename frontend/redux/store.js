import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
// import { AppState } from 'react-native'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import userReducer from './reducers/userReducer'
import usersReducer from './reducers/usersReducer'
import navigationReducer from './reducers/navigationReducer'
import postAdReducer from './reducers/postAdReducer'
import getAdsReducer from './reducers/getAdsReducer'
import getSpecificAdsReducer from './reducers/getSpecificAdsReducer'
import getUserAdsReducer from './reducers/getUserAdsReducer'
import showAdReducer from './reducers/showAdReducer'
import postImageReducer from './reducers/postImageReducer'

const configLogin = { key: 'userReducer', storage }

const rootReducer = combineReducers({
  userReducer: persistReducer(configLogin, userReducer),
  usersReducer,
  navigationReducer,
  getAdsReducer,
  getSpecificAdsReducer,
  getUserAdsReducer,
  postAdReducer,
  showAdReducer,
  postImageReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// import logger from 'redux-logger'
// const logger = createLogger({
//   level: 'error',//'warn' |
// });

function configureStore() {
  let store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)) //logger
  )
  let persistor = persistStore(store)

  // If the app is closed
  // AppState.addEventListener('change', state => {
  //     // 'active', 'inactive', 'background'
  //   if (state === 'background') {
  //     console.log('Running sync in background...')
  //     // store.dispatch(syncPhotosInBackground())
  //   }
  // })

  return { persistor, store }
}

export default configureStore
