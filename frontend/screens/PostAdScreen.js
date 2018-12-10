import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, TouchableWithoutFeedback, View, Text } from 'react-native'
import validator from 'validator'
import postAd from '../redux/2_actions/adsActions/postAdAction'
import getAds from '../redux/2_actions/adsActions/getAdsAction'

import InputDate from '../components/InputDate'
import InputTimeScreen from './InputTimeScreen'
import { styledComponents } from '../styles/_styledComponents'
import InputPriceScreen from './InputPriceScreen'
import InputImage from '../components/InputImage'
import InputTitleDescription from '../components/InputTitleDescription'
import UploadAdButton from '../components/UploadAdButton'
import { greyBox } from '../styles/_compositions'

class PostAdScreen extends React.Component {
  state = {
    ...initState,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let nextParams = nextProps.navigation
    let prevParams = prevState.navigation
    // let nextAd_schedule = nextProps.navigation.state.params.ad_schedule
    // let prevAd_schedule = prevState.navigation.state.params.ad_schedule

    let nextAd_imageUri = nextProps.ad_imageUri
    let prevAd_imageUri = prevState.ad_imageUri

    if (nextAd_imageUri !== prevAd_imageUri) {
      return { ad_imageUri: nextAd_imageUri }
    }

    // console.log('nextParams, prevParams', nextParams, prevParams)
    // console.log(
    //   'nextProps.navigation.state.getParam',
    //   nextProps.navigation.state.getParam
    // )
    // console.log('ad_schedule', nextProps.navigation.state.getParam.ad_schedule)
    // if (nextParams !== prevParams) {
    //   return { ad_schedule: nextProps.navigation.state.getParam.ad_schedule }
    // }

    return null
  }

  componentDidUpdate(prevProps) {
    const { status, navigation, getAds } = this.props
    const { navigate } = navigation

    if (status !== prevProps.status && status === 200) {
      getAds()
      navigate('CongratulationsScreenRoute')

      this.setState({
        ...initState,
      })
    }

    console.log('this.state', this.state)
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

  _postAd = () => {
    const { postAd, user_id } = this.props
    const {
      ad_title,
      ad_description,
      ad_date,
      ad_price,
      ad_imageUri,
      ad_schedule,
    } = this.state

    const body = {
      ad_title,
      ad_description,
      ad_date,
      ad_price,
      ad_imageUri,
      user_id,
      ad_schedule: JSON.stringify(ad_schedule),
    }
    console.log('sssss', body)

    postAd(body)
  }

  hasAllFields = () => {
    const {
      ad_description,
      ad_title,
      ad_date,
      ad_price,
      ad_imageUri,
    } = this.state

    return ad_imageUri && ad_description && ad_title && ad_date && ad_price
  }

  goToScreen = () => {
    const { ad_schedule } = this.state
    const { navigation } = this.props
    const { navigate } = navigation

    navigate('InputTimeScreenRoute', {
      navigation,
      ad_schedule,
    })
  }

  render() {
    const { container } = styledComponents
    const { isFetching, navigation } = this.props
    const {
      ad_imageUri,
      placeholder_title,
      placeholder_description,
      placeholder_price,
      ad_title,
      ad_description,
      ad_date,
      ad_price,
    } = this.state

    return (
      <ScrollView
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        style={container}>
        <InputImage navigation={navigation} ad_imageUri={ad_imageUri} />

        <InputTitleDescription
          placeholder_title={placeholder_title}
          ad_title={ad_title}
          placeholder_description={placeholder_description}
          ad_description={ad_description}
          handleChange={(input, inputValue) =>
            this.handleChange(input, inputValue)
          }
        />

        <InputDate
          ad_date={ad_date}
          handleChange={(input, inputValue) =>
            this.handleChange(input, inputValue)
          }
        />

        <View style={greyBox}>
          <TouchableWithoutFeedback onPress={this.goToScreen}>
            <View>
              <Text>Vilka tider kan du?</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <InputPriceScreen
          placeholder_price={placeholder_price}
          ad_price={ad_price}
          navigation={navigation}
          handleChange={(input, inputValue) =>
            this.handleChange(input, inputValue)
          }
        />

        <UploadAdButton
          _postAd={this._postAd}
          isFetching={isFetching}
          hasAllFields={this.hasAllFields}
        />
      </ScrollView>
    )
  }
}

const initState = {
  ad_imageUri: '',
  placeholder_title: 'Ange rubrik för annonsen',
  placeholder_description: 'Beskriv vad du vill ha hjälp med',
  placeholder_price: 'Ange ditt pris',
  ad_description: '',
  ad_title: '',
  ad_date: 'Vilken dag vill du ha hjälp?',
  ad_price: '',
  ad_schedule: [
    {
      schedule_segment: 1,
      schedule_time: '06:00-09:00',
      schedule_segment_picked: false,
    },
    {
      schedule_segment: 2,
      schedule_time: '09:00-12:00',
      schedule_segment_picked: false,
    },
    {
      schedule_segment: 3,
      schedule_time: '12:00-15:00',
      schedule_segment_picked: false,
    },
    {
      schedule_segment: 4,
      schedule_time: '15:00-18:00',
      schedule_segment_picked: false,
    },
    {
      schedule_segment: 5,
      schedule_time: '18:00-21:00',
      schedule_segment_picked: false,
    },
  ],
}

const mapStateToProps = state => ({
  ad_imageUri: state.postImageReducer.data,
  status: state.adsReducers.postAdReducer.status,
  isFetching: state.adsReducers.postAdReducer.isFetching,
  user_id: state.userReducers.loginReducer.data.user_id,
})
const mapDispatchToProps = { postAd, getAds }
const _PostAdScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostAdScreen)
export default _PostAdScreen
