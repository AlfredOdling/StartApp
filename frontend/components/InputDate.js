import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { StyledText } from '../components/styled/StyledComponents'
import { styledComponents } from '../styles/_styledComponents'

export default class InputDate extends React.Component {
  state = {
    isDateTimePickerVisible: false,
  }

  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })

  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })

  handleDatePicked = ad_date => {
    const { handleChange } = this.props
    // this.setState({
    //   ad_date: this.formatDate(ad_date),
    // })

    handleChange('ad_date', this.formatDate(ad_date))

    this.hideDateTimePicker()
  }

  formatDate = ad_date => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
    let dateToString = ad_date.toLocaleDateString('swe-SE', options)
    let capitalizedFirstLetter =
      dateToString.charAt(0).toUpperCase() + dateToString.slice(1)

    return capitalizedFirstLetter
  }

  render() {
    const { inputDate } = styledComponents
    const { ad_date } = this.props
    const { isDateTimePickerVisible } = this.state

    return (
      <View style={inputDate}>
        <TouchableOpacity onPress={() => this.showDateTimePicker()}>
          <StyledText style={styles.when} data={ad_date} />
        </TouchableOpacity>

        <DateTimePicker
          isVisible={isDateTimePickerVisible}
          onConfirm={date => this.handleDatePicked(date)}
          onCancel={() => this.hideDateTimePicker()}
          mode={'date'}
        />
      </View>
    )
  }
}

const styles = {
  when: 'medium_black_14',
}
