import { colors, dimension, fonts } from './_base'

const {
  c_black,
  c_white,
  c_green,
  c_grey,
  c_lightGrey,
  c_darkGrey,
  c_orange,
} = colors
const { f_medium, f_black, f_heavy, f_light } = fonts
const {
  _1,
  _3,
  _4,
  _10,
  _15,
  _20,
  _22,
  _25,
  _30,
  _40,
  _42,
  _50,
  _59,
  _60,
  _220,
  _250,
  _335,
} = dimension

export const shadow = {
  shadowOffset: { width: 0, height: _4 },
  shadowColor: c_black,
  shadowOpacity: 0.14,
  shadowRadius: _4,
}

const buttonBase = {
  ...shadow,
  height: _59,
  width: _335,
  flex: 1,
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: _20,
}

const button = {
  ...buttonBase,
  justifyContent: 'center',
}

const buttonText = {
  fontFamily: f_medium,
  fontSize: 22,
}

const distance = {
  fontFamily: f_heavy,
  fontSize: 14,
  // marginTop: _4,
}

const price = {
  fontFamily: f_black,
  fontSize: 18,
  color: c_green,
}

const title = {
  fontFamily: f_black,
  fontSize: 20,
}

const greyBoxNoPadding = {
  backgroundColor: c_lightGrey,
  marginTop: _20,
  display: 'flex',
  justifyContent: 'center',
  borderRadius: 5,
}

const greyBox = {
  ...greyBoxNoPadding,
  padding: _25,
}

export const styledComponents = {
  black_white_45: {
    fontFamily: f_black,
    color: c_white,
    fontSize: 45,
  },
  black_black_20: {
    ...title,
    color: c_black,
    marginTop: _10,
  },
  black_white_20: {
    ...title,
    color: c_white,
  },
  black_separator: {
    height: _1,
    backgroundColor: c_black,
    marginVertical: _10,
  },
  white_separator: {
    height: _1,
    backgroundColor: c_white,
    marginVertical: _4,
  },
  medium_black_14: {
    fontFamily: f_medium,
    fontSize: 14,
    color: c_black,
  },
  medium_white_14: {
    fontFamily: f_medium,
    fontSize: 14,
    color: c_white,
  },
  medium_black_12: {
    fontFamily: f_medium,
    fontSize: 12,
    color: c_black,
  },
  light_black_12: {
    fontFamily: f_light,
    fontSize: 12,
    color: c_black,
  },
  ads_price: {
    ...price,
  },
  ad_price: {
    ...price,
    marginTop: _40,
  },
  black_distance: {
    ...distance,
    color: c_black,
  },
  white_distance: {
    ...distance,
    color: c_white,
  },
  greenButton: {
    ...button,
    backgroundColor: c_green,
  },
  orangeButton: {
    ...button,
    backgroundColor: c_orange,
  },
  whiteButton: {
    ...button,
    backgroundColor: c_white,
  },
  blackTextButton: {
    ...buttonText,
    color: c_black,
  },
  whiteTextButton: {
    ...buttonText,
    color: c_white,
  },
  adImage: {
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    height: _220,
    borderRadius: 8,
  },
  smallRoundProfilePic: {
    resizeMode: 'cover',
    overflow: 'hidden',
    height: _42,
    width: _42,
    borderRadius: 21,
  },
  buttonProfilePic: {
    ...buttonBase,
    alignItems: 'flex-start',
    backgroundColor: c_white,
  },
  adContainer: {
    flex: 1,
    backgroundColor: c_white,
    margin: _20,
  },
  scrollViewContainer: {
    backgroundColor: c_white,
    flex: 1,
  },
  nameTextProfileButton: {
    fontFamily: f_medium,
    fontSize: 17,
    color: c_black,
  },
  memberSinceTextProfileButton: {
    fontFamily: f_light,
    fontSize: 15,
    color: c_black,
  },

  container: {
    flex: 1,
    backgroundColor: c_white,
    paddingHorizontal: _20,
    paddingBottom: _60,
  },
  inputPhoto: {
    ...greyBox,
    height: _250,
    alignItems: 'center',
  },
  inputPhotoUploaded: {
    ...greyBoxNoPadding,
    height: _250,
    alignItems: 'center',
    overflow: 'hidden',
  },
  inputTitleDescription: {
    ...greyBox,
    alignItems: 'flex-start',
  },
  inputPrice: {
    ...greyBox,
    alignItems: 'flex-start',
  },
  inputDate: {
    ...greyBox,
    alignItems: 'flex-start',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: c_darkGrey,
    height: _20,
    minWidth: _30,
  },
  input: {
    height: _30,
    minWidth: _30,
    backgroundColor: 'transparent',
  },
}
