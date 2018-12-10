import React from 'react'
import { Text, TextInput, Button, View } from 'react-native'
import { callPost } from '../utils/utils'

export default class EditAdsElement extends React.Component {
  state = {
    ad_id: '',
    ad_title: '',
    ad_description: '',
    ad_date: '',
    ad_price: '',
    ad_imageUri: '',
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { ad } = nextProps
    const {
      ad_id,
      ad_title,
      ad_description,
      ad_date,
      ad_price,
      ad_imageUri,
    } = ad
    let returnStatement = []

    if (ad !== prevState.ad && !prevState.initLoad) {
      returnStatement = {
        initLoad: true,
        ad_id,
        ad_title,
        ad_description,
        ad_date,
        ad_price,
        ad_imageUri,
      }
    }
    return returnStatement
  }

  handleChange = (input, inputValue) => {
    this.setState({
      [input]: inputValue,
    })
  }

  deleteAd = async ad_id => {
    let route = '/delete_ad'
    let body = { ad_id }

    const status = await callPost(route, body)
    if (status === 200) {
      // callGetCustomers()
    } else {
      alert('Error, check console')
    }
  }

  updateAd = async ad => {
    // const { callGetCustomers } = this.props
    const {
      ad_id,
      ad_title,
      ad_description,
      ad_date,
      ad_price,
      ad_imageUri,
    } = ad

    let body = {
      ad_id,
      ad_title: 'Ny titel! Hoppas jag',
      ad_description,
      ad_date,
      ad_price,
      ad_imageUri,
    }
    let route = '/update_ad'

    const status = await callPost(route, body)
    if (status === 200) {
      // callGetCustomers()
    } else {
      alert('Error, check console')
    }
  }

  render() {
    const { ad } = this.props
    const {
      ad_id,
      ad_title,
      ad_description,
      ad_date,
      ad_price,
      ad_imageUri,
    } = ad

    return (
      <View>
        <Text>-----------</Text>
        <Text>Titel: </Text>
        <TextInput
          onChangeText={text => this.handleChange('ad_title', text)}
          value={ad_title}
        />
        <Text>Beskrivning: </Text>
        <TextInput
          onChangeText={text => this.handleChange('ad_description', text)}
          value={ad_description}
        />
        <Text>-----------</Text>
        {/*        <TextInput
          onChangeText={text => this.handleChange('ad_date', text)}
          value={ad_date}
        />
        <TextInput
          onChangeText={text => this.handleChange('ad_price', text)}
          value={ad_price}
/>*/}
        <Button title="Ta bort" onPress={() => this.deleteAd(ad_id)} />
        <Button title="Uppdatera" onPress={() => this.updateAd(ad)} />
      </View>
    )
  }
}
