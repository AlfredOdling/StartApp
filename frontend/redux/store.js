import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { AppState } from 'react-native'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage'

import loginReducer from './reducers/loginReducer'
import navigationReducer from './reducers/navigationReducer'
import postAdReducer from './reducers/postAdReducer'
import getAdsReducer from './reducers/getAdsReducer'
import showAdReducer from './reducers/showAdReducer'

const configLogin = { key: 'loginReducer', storage }

const rootReducer = combineReducers({
  loginReducer: persistReducer(configLogin, loginReducer),
  navigationReducer,
  getAdsReducer,
  postAdReducer,
  showAdReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

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
