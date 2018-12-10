import React from 'react'
import { View, TextInput, Text, TouchableWithoutFeedback } from 'react-native'
import { styledComponents } from '../styles/_styledComponents'

const InputPriceScreen = ({
  placeholder_price,
  handleChange,
  ad_price,
  navigation,
}) => {
  const { inputContainer, inputPrice } = styledComponents
  const { navigate } = navigation
  const { state } = navigation
  const { routeName, params } = state
  let isInputPriceScreenRoute = routeName === 'InputPriceScreenRoute'

  if (isInputPriceScreenRoute) {
    placeholder_price = params.placeholder_price
    handleChange = params.handleChange
    ad_price = params.ad_price
    navigation = params.navigation
  }

  const goToScreen = () => {
    if (!isInputPriceScreenRoute) {
      navigate('InputPriceScreenRoute', {
        placeholder_price,
        handleChange,
        ad_price,
        navigation,
      })
    }
  }

  const _handleChange = text => {
    if (isInputPriceScreenRoute) {
      params.handleChange('ad_price', text)
    } else {
      handleChange('ad_price', text)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={goToScreen}>
      <View style={inputPrice}>
        <View style={inputContainer}>
          <TextInput
            autoFocus={isInputPriceScreenRoute}
            keyboardType={'numeric'}
            autoCapitalize={'sentences'}
            placeholder={placeholder_price}
            onChangeText={text => _handleChange(text)}
            value={ad_price}
          />
          {ad_price ? <Text> kr</Text> : []}
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default InputPriceScreen
