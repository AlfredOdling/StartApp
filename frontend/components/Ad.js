import React from 'react'
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  ScrollView,
} from 'react-native'
import _Ad from '../styles/_Ad'
import base from '../styles/base'

export default Ad = ({ item }) => {
  const {
    ad_description,
    ad_id,
    ad_price,
    ad_time,
    ad_title,
  } = item

  const {
    container,
    containerContent,
    black_title,
    black_separator,
    price,
    description,
    distance,
    button,
    buttonText,
  } = _Ad
  let uri = 'https://placekitten.com/g/200/300'

  return (
    <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={container}>
        <Image
          style={{
            height: 220,
            width: '100%',
            resizeMode: 'cover',
            justifyContent: 'flex-end',
            borderRadius: 8,
            overflow: 'hidden',
          }}
          source={{ uri }} />

        <Text style={black_title}>{ad_title}</Text>
        <View style={black_separator} />
        <Text style={description}>{ad_description}</Text>
        <Text style={price}>{ad_price} kr</Text>
        <Text style={distance}>{ad_id} km</Text>
        <Text style={distance}>Måndag, 5 Oktober 2018</Text>

        <TouchableHighlight style={button}>
          <Text style={buttonText}>Utför uppdrag</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  )
}
