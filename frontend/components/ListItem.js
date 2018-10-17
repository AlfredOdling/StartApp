import React from 'react'
import {
  View,
  Text,
  ImageBackground,
  TouchableHighlight,
} from 'react-native'
import _ListItem from '../styles/_ListItem'

const ListItem = ({ showAd, item }) => {
  const {
    ad_description,
    ad_id,
    ad_price,
    ad_time,
    ad_title,
  } = item

  const {
    title,
    separator,
    price,
    distance,
    container,
    containerContent,
  } = _ListItem
  let uri = 'https://placekitten.com/g/200/300'

  return (
    <TouchableHighlight onPress={() => showAd(item)} style={container}>
      <ImageBackground
        style={{
          backgroundColor: '#ccc',
          flex: 1,
          width: '100%',
          height: '100%',
          justifyContent: 'flex-end',
        }}
        source={{ uri }}>
        <View style={containerContent}>
          <Text style={title}>{ad_title}</Text>
          <View style={separator} />
          <Text style={price}>{ad_price} kr</Text>
          <Text style={distance}>{ad_id} km</Text>
        </View>
      </ImageBackground>
    </TouchableHighlight>
  )
}

export default ListItem
