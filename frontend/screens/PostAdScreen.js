import React from 'react'
import { connect } from 'react-redux'
import { ScrollView } from 'react-native'
import validator from 'validator'
import { postAd } from '../redux/actions/postAdActions'
import { getAds } from '../redux/actions/getAdsActions'

import InputDate from '../components/InputDate'
import { styledComponents } from '../styles/_styledComponents'
import { InputPriceScreen } from './InputPriceScreen'
import { InputImage } from '../components/InputImage'
import { InputTitleDescription } from '../components/InputTitleDescription'
import { UploadAdButton } from '../components/UploadAdButton'

class PostAdScreen extends React.Component {
  state = {
    ...initState,
  }

  componentDidUpdate(prevProps) {
    const { status, navigation, ad_imageUri, getAds } = this.props
    const { navigate } = navigation

    if (status !== prevProps.status && status === 200) {
      getAds()
      navigate('CongratulationsScreenRoute')

      this.setState({
        ...initState,
      })
    }

    if (ad_imageUri !== prevProps.ad_imageUri) {
      this.setState({
        ad_imageUri,
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

  _postAd = () => {
    const { postAd, user_id } = this.props
    const {
      ad_title,
      ad_description,
      ad_time,
      ad_price,
      ad_imageUri,
    } = this.state

    const body = {
      ad_title,
      ad_description,
      ad_time,
      ad_price,
      ad_imageUri,
      user_id,
    }

    postAd(body)
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
    const { container } = styledComponents
    const { isFetching, navigation } = this.props
    const {
      ad_imageUri,
      placeholder_title,
      placeholder_description,
      placeholder_price,
      ad_title,
      ad_description,
      ad_time,
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
          ad_time={ad_time}
          handleChange={(input, inputValue) =>
            this.handleChange(input, inputValue)
          }
        />

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
  ad_time: 'När vill du ha hjälp?',
  ad_price: '',
}

const mapStateToProps = state => ({
  ad_imageUri: state.postImageReducer.data,
  status: state.postAdReducer.status,
  isFetching: state.postAdReducer.isFetching,
  user_id: state.userReducer.data.user_id,
})
const mapDispatchToProps = { postAd, getAds }
const _PostAdScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostAdScreen)
export default _PostAdScreen
