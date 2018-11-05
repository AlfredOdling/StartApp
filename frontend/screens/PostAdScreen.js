import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, TextInput, TouchableOpacity, Image, Text } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import validator from 'validator'
import { postAd } from '../redux/actions/postAdActions'
import { getAds } from '../redux/actions/getAdsActions'

import {
  StyledText,
  StyledButton,
  StyledIcon,
} from '../components/styled/StyledComponents'
import { styledComponents } from '../styles/_styledComponents'
import { getDim } from '../utils/responsive'

const resetState = {
  isDateTimePickerVisible: false,
  ad_imageUri: '',
  placeholder_title: 'Ange rubrik för annonsen',
  placeholder_description: 'Beskriv vad du vill ha hjälp med',
  placeholder_price: 'Ange ditt pris',
  ad_description: '',
  ad_title: '',
  ad_time: 'När vill du ha hjälp?',
  ad_price: '',
}

class PostAdScreen extends React.Component {
  state = {
    ...resetState,
  }

  componentDidUpdate(prevProps) {
    const { status, navigation, ad_imageUri, getAds } = this.props
    const { navigate } = navigation

    if (status !== prevProps.status && status === 200) {
      getAds()
      navigate('CongratulationsScreenRoute')

      this.setState({
        ...resetState,
      })
    }

    if (ad_imageUri !== prevProps.ad_imageUri) {
      this.setState({
        ad_imageUri
      })
    }
  }

  handleChange = (input, inputValue) => {
    // let hej = input === 'ad_price' && !validator.isNumeric(inputValue)
    // let numbers = inputValue.match(/\d+/g).map(Number).join('');
    // if (hej) {
    //   var regex = /d/g
    //   inputValue = inputValue.match(regex)
    // }

    this.setState({
      [input]: inputValue,
    })
  }

  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })

  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })

  formatDate = ad_time => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
    let dateToString = ad_time.toLocaleDateString('swe-SE', options)
    let capitalizedFirstLetter = dateToString.charAt(0).toUpperCase() + dateToString.slice(1)

    return capitalizedFirstLetter
  }

  handleDatePicked = ad_time => {
    this.setState({
      ad_time: this.formatDate(ad_time)
    })

    this.hideDateTimePicker()
  }

  _postAd = () => {
    const { postAd } = this.props
    const { ad_title, ad_description, ad_time, ad_price, ad_imageUri } = this.state

    const body = {
      ad_title,
      ad_description,
      ad_time,
      ad_price,
      ad_imageUri,
    }

    postAd(body)
  }

  pickImage = () => {
    const { navigation } = this.props
    const { navigate } = navigation

    navigate('ImageUploadRoute')
  }

  hasAllFields = () => {
    const {
      ad_description,
      ad_title,
      ad_time,
      ad_price,
      ad_imageUri,
    } = this.state

    return ad_imageUri && ad_description && ad_title && ad_time && ad_price
  }

  render() {
    const {
      container,
      inputContainer,
      inputPhoto,
      inputPhotoUploaded,
      inputTitleDescription,
      inputDate,
      inputPrice,
    } = styledComponents

    const {
      ad_imageUri,
      placeholder_title,
      placeholder_description,
      placeholder_price,
      isDateTimePickerVisible,
      ad_title,
      ad_description,
      ad_time,
      ad_price,
    } = this.state
    const { isFetching } = this.props

    return (
      <ScrollView style={container}>
        <TouchableOpacity onPress={() => this.pickImage()}>
          {
            ad_imageUri ?
              <View style={inputPhotoUploaded}>
                <Image style={{ width: '100%', height: '100%' }} source={{ uri: ad_imageUri }} />
              </View>
              :
              <View style={inputPhoto}>
                <StyledIcon
                  width={getDim(60)}
                  height={getDim(50)}
                  source={require('../assets/images/photo-camera.png')}
                />
                <StyledIcon
                  width={getDim(22)}
                  height={getDim(22)}
                  marginVertical={getDim(8)}
                  source={require('../assets/images/add.png')}
                />
                <StyledText style={styles.adPhoto} data={'Lägg till foto'} />
              </View>
          }
        </TouchableOpacity>

        <View style={inputTitleDescription}>
          <View style={inputContainer}>
            <TextInput
              autoCapitalize={'sentences'}
              placeholder={placeholder_title}
              onChangeText={text => this.handleChange('ad_title', text)}
              value={ad_title}
            />
          </View>
          <TextInput
            autoCapitalize={'sentences'}
            multiline
            style={{ marginTop: getDim(10), marginBottom: getDim(60) }}
            placeholder={placeholder_description}
            onChangeText={text => this.handleChange('ad_description', text)}
            value={ad_description}
          />
          <StyledText style={styles.descriptionLength} data={'10' + '/' + 25} />
        </View>

        <View style={inputDate}>
          <TouchableOpacity onPress={() => this.showDateTimePicker()}>
            <StyledText style={styles.when} data={ad_time} />
          </TouchableOpacity>

          <DateTimePicker
            isVisible={isDateTimePickerVisible}
            onConfirm={date => this.handleDatePicked(date)}
            onCancel={() => this.hideDateTimePicker()}
            mode={'datetime'}
          />
        </View>

        <View style={inputPrice}>
          <View style={inputContainer}>
            <TextInput
              keyboardType={'numeric'}
              autoCapitalize={'sentences'}
              placeholder={placeholder_price}
              onChangeText={text => this.handleChange('ad_price', text)}
              value={ad_price}
            />
            {
              ad_price ?
                <Text> kr</Text>
                :
                []
            }
          </View>
        </View>

        {
          this.hasAllFields() ?
            <StyledButton
              onPress={this._postAd}
              style={isFetching ? styles.orangeButton : styles.greenButton}
              data={isFetching ? 'Laddar...' : 'Lägg in annons'}
            /> :
            <View style={{ opacity: 0.4 }}>
              <StyledButton
                onPress={() => { }}
                style={styles.greenButton}
                data={'Lägg in annons'}
              />
            </View>
        }

      </ScrollView>
    )
  }
}

const styles = {
  adPhoto: 'medium_black_14',
  optional: 'light_black_12',
  descriptionLength: 'medium_black_12',
  when: 'medium_black_14',
  greenButton: 'green',
  orangeButton: 'orange',
}

const mapStateToProps = state => ({
  ad_imageUri: state.postImageReducer.data,
  status: state.postAdReducer.status,
  isFetching: state.postAdReducer.isFetching,
})
const mapDispatchToProps = { postAd, getAds }
const _PostAdScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostAdScreen)
export default _PostAdScreen
