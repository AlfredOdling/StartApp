import {
  SHOW_AD,
  HIDE_AD,
} from '../../1_actionTypes/adsActionTypes/showAdActionTypes'

const _showAd = (type, item) => {
  return {
    type,
    item,
  }
}

const _hideAd = type => {
  return {
    type,
  }
}

export function showAd(item, navigate) {
  navigate('AdScreenRoute')

  return async dispatch => {
    dispatch(_showAd(SHOW_AD, item))
  }
}

export function hideAd() {
  return async dispatch => {
    dispatch(_hideAd(HIDE_AD))
  }
}

export { SHOW_AD, HIDE_AD }
