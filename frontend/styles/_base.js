import { StyleSheet } from 'react-native'
import { getDim } from '../utils/responsive'

export const colors = {
  c_black: 'rgb(0, 0, 0)',
  c_white: 'rgb(255, 255, 255)',
  c_darkGrey: 'rgb(127, 127, 127)',
  c_grey: 'rgb(180, 180, 180)',
  c_lightGrey: 'rgb(242, 242, 242)',
  c_green: 'rgb(127, 199, 54)',
  c_green: 'rgb(127, 199, 54)',
  c_orange: 'rgb(245, 166, 35)',
}

export const fonts = {
  f_light: 'Avenir-Light',
  f_medium: 'Avenir-Medium',
  f_black: 'Avenir-Black',
  f_heavy: 'Avenir-Heavy',
}

export const dimension = {
  _1: getDim(1),
  _4: getDim(4),
  _10: getDim(10),
  _15: getDim(15),
  _20: getDim(20),
  _22: getDim(22),
  _25: getDim(25),
  _30: getDim(30),
  _40: getDim(40),
  _30: getDim(30),
  _42: getDim(42),
  _50: getDim(50),
  _59: getDim(59),
  _60: getDim(60),
  _157: getDim(157),
  _220: getDim(220),
  _250: getDim(250),
  _335: getDim(335),
}
