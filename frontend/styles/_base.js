import { getDim } from '../utils/responsive'

export const colors = {
  c_black: 'rgb(0, 0, 0)',
  c_white: 'rgb(255, 255, 255)',
  c_darkGrey: 'rgb(127, 127, 127)',
  c_grey: 'rgb(180, 180, 180)',
  c_lightGrey: 'rgb(242, 242, 242)',
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
  _3: getDim(3),
  _4: getDim(4),
  _10: getDim(10),
  _15: getDim(15),
  _20: getDim(20),
  _22: getDim(22),
  _25: getDim(25),
  _30: getDim(30),
  _35: getDim(35),
  _40: getDim(40),
  _42: getDim(42),
  _50: getDim(50),
  _59: getDim(59),
  _60: getDim(60),
  _157: getDim(157),
  _200: getDim(200),
  _220: getDim(220),
  _250: getDim(250),
  _335: getDim(335),
}

const _spaceMainAxis = {
  flexStart: {
    justifyContent: 'flex-start',
  },
  flexEnd: {
    justifyContent: 'flex-end',
  },
  center: {
    justifyContent: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  spaceEvenly: {
    justifyContent: 'space-evenly',
  },
}

const _spaceCrossAxis = {
  flexStart: {
    alignItems: 'flex-start',
  },
  flexEnd: {
    alignItems: 'flex-end',
  },
  center: {
    alignItems: 'center',
  },
  stretch: {
    alignItems: 'stretch',
  },
}

export const layout = {
  _flexColumn: { display: 'flex', flexDirection: 'column' },
  _flexRow: { display: 'flex', flexDirection: 'row' },
  _column: 'flexDirection: column',
  _row: 'flexDirection: row',
  _spaceMainAxis,
  _spaceCrossAxis,
}
