import React from 'react'
import { connect } from 'react-redux'
import { postAd } from '../redux/actions/postAdActions'
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import postAdScreen from '../styles/postAdScreen'

class PostAdScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      placeholder_title: 'Ange rubrik för annonsen',
      placeholder_description: 'Beskriv vad du vill ha hjälp med',
      placeholder_price: 'Ange ditt pris',
      isDateTimePickerVisible: false,
      ad_description: '',
      ad_title: '',
      ad_time: '2013-12-23',
      ad_price: '',
    }
  }

  handleChange = input => {
    this.setState({ 
      [input]: input
    })
  }

  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })

  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })

  handleDatePicked = () => {
    console.log('A date has been picked: ', this)
    this.hideDateTimePicker()
  }

  _postAd = () => {
    const { postAd } = this.props
    const {
      ad_title,
      ad_description,
      ad_time,
      ad_price
    } = this.state

    // const body = {
    //   ad_title,
    //   ad_description,
    //   ad_time,
    //   ad_price,
    // }

    const body = {
      "ad_description": "ad_description",
      "ad_price": 200,
      "ad_time": 201312,
      "ad_title": "ad_title",
    }

    postAd(body)
  }

  render() {
    const {
      container,
      greyBox,
      greyBox2,
      p,
      p1,
      p2,
      inputContainer,
      input,
      cameraImage,
      addImage,
      addPhoto,
      postAdButton,
    } = postAdScreen

    const {
      placeholder_title,
      placeholder_description,
      placeholder_price,
      isDateTimePickerVisible,
      ad_title,
      ad_description,
      ad_time,
      ad_price,
    } = this.state

    return (
      <ScrollView style={container}>
        <View style={[greyBox, addPhoto]}>
          <Image
            source={require('../assets/images/photo-camera.png')}
            style={cameraImage}
          />
          <Image
            source={require('../assets/images/add.png')}
            style={addImage}
          />
          <Text style={[p, p1]}>Lägg till foto</Text>
          <Text style={[p, p2]}>(valfritt)</Text>
        </View>

        <View style={greyBox2}>
          <View style={inputContainer}>
            <TextInput
              autoCapitalize={'sentences'}
              style={[p, p1, input]}
              placeholder={placeholder_title}
              onChangeText={ad_title => this.handleChange('ad_title')}
              value={ad_title}
            />
          </View>
            <TextInput
              autoCapitalize={'sentences'}
              multiline={true}
              style={[p, p1, input, {marginBottom: 60}]}
              placeholder={placeholder_description}
              onChangeText={ad_description => this.handleChange('ad_description')}
              value={ad_description}
            />
            <Text style={[p, p2]}>{ad_description.length+'/'+500}</Text>
        </View>

        <View style={[greyBox]}>
          <TouchableOpacity onPress={() => this.showDateTimePicker()}>
            <Text>När vill du ha hjälp?</Text>
          </TouchableOpacity>

          <DateTimePicker
            isVisible={isDateTimePickerVisible}
            onConfirm={() => this.handleDatePicked()}
            onCancel={() => this.hideDateTimePicker()}
            mode={'datetime'}
          />
        </View>

        <View style={greyBox}>
          <View style={inputContainer}>
            <TextInput
              autoCapitalize={'sentences'}
              style={[p, p1, input]}
              placeholder={placeholder_price}
              onChangeText={ad_price => this.handleChange('ad_price')}
              value={ad_price}
            />
          </View>
        </View>

        <TouchableOpacity
          style={postAdButton}
          onPress={() => this._postAd()}>
          <Text>Utför arbete</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

const mapDispatchToProps = { postAd }
const _PostAdScreen = connect(undefined, mapDispatchToProps)(PostAdScreen)
export default _PostAdScreen
