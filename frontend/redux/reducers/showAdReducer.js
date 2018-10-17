import {
  SHOW_AD,
  HIDE_AD,
} from '../actions/actionTypes/showAdActionTypes'

const initialState = {
  showAd: false,
  item: {}
}

const showAdReducer = (state = initialState, action) => {
  const {
    type,
    item,
  } = action

  switch (type) {
    case SHOW_AD:
      return {
        showAd: true,
        item
      }
    case HIDE_AD:
      return {
        showAd: false
      }
      
    default:
      return state
  }
}

export default showAdReducer
