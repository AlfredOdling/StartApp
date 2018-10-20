import { StyleSheet, Dimensions } from 'react-native'
import { shadow } from './_styledComponents'
import { 
  colors,
  dimension,
  fonts,
} from './_base'

const {
  c_black,
  c_white,
  c_grey,
  c_green,
 } = colors
 
 const { 
  f_medium,
  f_black,
  f_heavy,
 } = fonts

const {
  _1,
  _3,
  _4,
  _10,
  _20,
  _40,
  _157,
} = dimension

export default StyleSheet.create({
  shadowContainer: {
    height: _157,
    width: _157,
    margin: _10,
    ...shadow,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: c_grey,
    borderRadius: 8,
    overflow: 'hidden',
  },
  containerContent: {
    padding: _10,
  },
})