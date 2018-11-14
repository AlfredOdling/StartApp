import React from 'react'
import { View, ImageBackground, TouchableHighlight } from 'react-native'
import _ListItem from '../styles/_ListItem'
import {
  Separator,
  StyledText,
  StyledIcon,
} from '../components/styled/StyledComponents'

export const ListItem = ({ showAd, item, navigate }) => {
  const { ad_title, ad_price, ad_imageUri, ad_id } = item
  const { innerContainer, containerContent, shadowContainer } = _ListItem

  return (
    <TouchableHighlight
      onPress={() => showAd(item, navigate)}
      style={shadowContainer}>
      <View style={innerContainer}>
        <ImageBackground
          style={{
            backgroundColor: '#ccc',
            flex: 1,
            width: '100%',
            height: '100%',
            justifyContent: 'flex-end',
          }}
          source={{ uri: ad_imageUri }}>
          <View style={containerContent}>
            <StyledText style={styles.title} data={ad_title} />
            <Separator style={styles.separator} />
            <StyledText style={styles.price} data={ad_price + ' kr'} />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <StyledIcon
                width={12}
                height={16}
                marginRight={5}
                source={require('../assets/images/pin.png')}
              />
              <StyledText style={styles.distance} data={ad_id + ' km'} />
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableHighlight>
  )
}

const styles = {
  title: 'black_white_20',
  separator: 'white',
  price: 'ads_price',
  distance: 'white_distance',
}
