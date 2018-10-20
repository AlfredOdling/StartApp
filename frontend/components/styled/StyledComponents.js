import React from 'react'
import { Text, View, TouchableHighlight, Image } from 'react-native'
import { getDim } from '../../utils/responsive'
import { styledComponents } from '../../styles/_styledComponents'

const {
  black_black_20,
  black_white_20,
  black_separator,
  white_separator,
  medium_black_14,
  medium_black_12,
  light_black_12,
  ad_price,
  ads_price,
  black_distance,
  white_distance,
  date,
  greenButton,
  lightGreenButton,
  whiteButton,
  whiteTextButton,
  blackTextButton,
  adImage,
  smallRoundProfilePic,
  buttonProfilePic,
  nameTextProfileButton,
  memberSinceTextProfileButton,
} = styledComponents

// prettier-ignore
export const StyledText = ({ style, data }) => {
  let _style =
    style === 'black_black_20' ? black_black_20
  : style === 'black_white_20' ? black_white_20
  : style === 'light_black_12' ? light_black_12
  : style === 'medium_black_14' ? medium_black_14
  : style === 'medium_black_12' ? medium_black_12
  : style === 'date' ? date
  : style === 'ad_price' ? ad_price
  : style === 'ads_price' ? ads_price
  : style === 'black_distance' ? black_distance
  : style === 'white_distance' ? white_distance
  : ''
  
  return <Text style={_style}>{data}</Text>
}

// prettier-ignore
export const Separator = ({ style }) => {
  let _style =
    style === 'white' ? white_separator
  : style === 'black' ? black_separator
  : ''

  return <View style={_style}/>
}

// prettier-ignore
export const StyledButton = ({ style, data, onPress }) => {
  let _style =
    style === 'green' ? greenButton
  : style === 'lightGreen' ? lightGreenButton
  : style === 'white' ? whiteButton
  : ''

  let _buttonTextStyle =
    style === ('green' || 'lightGreen') ? whiteTextButton
  : style === 'white' ? blackTextButton
  : ''
  
  return (
    <TouchableHighlight style={_style} onPress={() => onPress()}>
      <Text style={_buttonTextStyle}>{data}</Text>
    </TouchableHighlight>
  )
}

export const StyledProfileButton = ({ style, data }) => {
  const { name, memberSince, uri } = data

  return (
    <TouchableHighlight style={buttonProfilePic}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flex: 1,
        }}>
        <Image style={smallRoundProfilePic} source={{ uri }} />
        <View style={{ justifyContent: 'flex-start', marginLeft: getDim(10) }}>
          <Text style={nameTextProfileButton}>{name}</Text>
          <Text style={memberSinceTextProfileButton}>{memberSince}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

export const StyledAdImage = ({ data }) => (
  <Image style={adImage} source={{ uri: data }} />
)

export const StyledIcon = ({ source, width, height, marginVertical }) => {
  return (
    <Image
      style={{
        width,
        height,
        resizeMode: 'contain',
        marginVertical: marginVertical || 0,
      }}
      source={source}
    />
  )
}
