import {
  SHOW_AD,
  HIDE_AD,
} from './actionTypes/showAdActionTypes'

export function showAd(item) {
  return async (dispatch) => {
    dispatch(_showAd(SHOW_AD, item))
  }
}

export function hideAd() {
  return async (dispatch) => {
    dispatch(_hideAd(HIDE_AD))
  }
}

_showAd = (type, item) => {
  return {
    type,
    item,
  }
}

_hideAd = type => {
  return {
    type,
  }
}

export {
  SHOW_AD,
  HIDE_AD,
}
