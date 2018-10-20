import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, TextInput, TouchableOpacity } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { postAd } from '../redux/actions/postAdActions'
import {
  StyledText,
  StyledButton,
  StyledIcon,
} from '../components/styled/StyledComponents'
import { styledComponents } from '../styles/_styledComponents'
import { getDim } from '../utils/responsive'

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
      [input]: input,
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
    const { ad_title, ad_description, ad_time, ad_price } = this.state

    // const body = {
    //   ad_title,
    //   ad_description,
    //   ad_time,
    //   ad_price,
    // }

    const body = {
      ad_description: 'ad_description',
      ad_price: 200,
      ad_time: 201312,
      ad_title: 'ad_title',
    }

    postAd(body)
  }

  pickImage = () => {
    const { navigation } = this.props
    const { navigate } = navigation

    navigate('ImageUploadRoute')
  }

  render() {
    const {
      container,
      inputContainer,
      inputPhoto,
      inputTitleDescription,
      inputDate,
      inputPrice,
    } = styledComponents

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
        <TouchableOpacity onPress={() => this.pickImage()} style={inputPhoto}>
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
          <StyledText style={styles.optional} data={'(valfritt)'} />
        </TouchableOpacity>

        <View
          style={[
            inputTitleDescription,
            { flexDirection: 'row', justifyContent: 'flex-start' },
          ]}>
          <View style={inputContainer}>
            <TextInput
              autoCapitalize={'sentences'}
              placeholder={placeholder_title}
              onChangeText={ad_title => this.handleChange('ad_title')}
              value={ad_title}
            />
          </View>
          <TextInput
            autoCapitalize={'sentences'}
            multiline
            style={{ marginBottom: getDim(60) }}
            placeholder={placeholder_description}
            onChangeText={ad_description => this.handleChange('ad_description')}
            value={ad_description}
          />
          <StyledText
            style={styles.descriptionLength}
            data={ad_description.length + '/' + 500}
          />
        </View>

        <View style={inputDate}>
          <TouchableOpacity onPress={() => this.showDateTimePicker()}>
            <StyledText style={styles.when} data={'När vill du ha hjälp?'} />
          </TouchableOpacity>

          <DateTimePicker
            isVisible={isDateTimePickerVisible}
            onConfirm={() => this.handleDatePicked()}
            onCancel={() => this.hideDateTimePicker()}
            mode={'datetime'}
          />
        </View>

        <View style={inputPrice}>
          <View style={inputContainer}>
            <TextInput
              autoCapitalize={'sentences'}
              placeholder={placeholder_price}
              onChangeText={ad_price => this.handleChange('ad_price')}
              value={ad_price}
            />
          </View>
        </View>

        <StyledButton
          onPress={this._postAd}
          style={styles.greenButton}
          data={'Lägg in annons'}
        />
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
}

const mapDispatchToProps = { postAd }
const _PostAdScreen = connect(
  undefined,
  mapDispatchToProps
)(PostAdScreen)
export default _PostAdScreen
