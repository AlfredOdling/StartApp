import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
// import { AppState } from 'react-native'
import thunk from 'redux-thunk'
import { persistStore /*persistReducer*/ } from 'redux-persist'
// import storage from 'redux-persist/es/storage'
import userReducers from './3_reducers/userReducers'
import adsReducers from './3_reducers/adsReducers'
import navigationReducer from './3_reducers/navigationReducer'
import postImageReducer from './3_reducers/postImageReducer'

const rootReducer = combineReducers({
  userReducers, // Persisting in reducer
  navigationReducer,
  adsReducers,
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
