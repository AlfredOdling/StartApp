import { Dimensions } from 'react-native'

const _width = 377
const dimWidth = Dimensions.get('window').width

export function getDims(w, h) {
  return {
    width: dimWidth * (w / _width),
    height: dimWidth * (h / _width),
  }
}

export function getDim(d) {
  return dimWidth * (d / _width)
}
