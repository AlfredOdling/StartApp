import * as _base from './_base'

export const text = {
  medium_black_14: {
    fontFamily: _base.fonts.f_medium,
    fontSize: 14,
    color: _base.colors.c_black,
  },
  medium_white_14: {
    fontFamily: _base.fonts.f_medium,
    fontSize: 14,
    color: _base.colors.c_white,
  },
  heavy_black_20: {
    fontFamily: _base.fonts.f_heavy,
    fontSize: 20,
    color: _base.colors.c_black,
  },
}

export const layout = {
  centerColumn: {
    ..._base.layout._flexColumn,
    ..._base.layout._spaceCrossAxis.center,
  },
}

export const spacing = {
  margin: {
    top: {
      _10: {
        marginTop: _base.dimension._10,
      },
      _20: {
        marginTop: _base.dimension._20,
      },
    },
  },
  padding: {
    _50: {
      padding: _base.dimension._50,
    },
  },
}

export const figures = {
  black_separator: {
    height: _base.dimension._1,
    backgroundColor: _base.colors.c_black,
    marginVertical: _base.dimension._10,
  },
}

export const greyBoxNoPadding = {
  backgroundColor: _base.colors.c_lightGrey,
  marginTop: _base.dimension._20,
  display: 'flex',
  justifyContent: 'center',
  borderRadius: 5,
}

export const _greyBox = {
  ...greyBoxNoPadding,
  padding: _base.dimension._25,
}

export const greyBox = {
  ..._greyBox,
  alignItems: 'flex-start',
}
