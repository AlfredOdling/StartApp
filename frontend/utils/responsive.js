import { Dimensions } from 'react-native'

const _width = 377
const dimWidth = Dimensions.get('window').width

export function getDim(d) {
  return Math.round(dimWidth * (d / _width))
}
