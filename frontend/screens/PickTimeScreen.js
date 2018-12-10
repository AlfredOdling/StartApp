import React from 'react'
import { connect } from 'react-redux'
import { View, TouchableHighlight, Text, ScrollView } from 'react-native'
import _inputTimeScreen from '../styles/_inputTimeScreen'
import { text, layout, spacing } from '../styles/_compositions'
import updateAdEmployees from '../redux/2_actions/adsActions/updateAdEmployeesAction'
import { StyledButton } from '../components/styled/StyledComponents'

class PickTimeScreen extends React.Component {
  state = {
    ad_schedule: [],
    ad_employees: [],
    ad_id: undefined,
    user_id: undefined,
    segment_picked_employee: '',
  }

  componentDidMount() {
    const { ad_schedule, ad_employees, ad_id, user_id } = this.props
    // const _ad_employees = JSON.parse(ad_employees)

    this.setState({
      ad_schedule: JSON.parse(ad_schedule),
      ad_employees: [], //_ad_employees ? _ad_employees : [],
      ad_id,
      user_id,
    })
  }

  pickTime = schedule_segment => {
    this.setState({ segment_picked_employee: schedule_segment })
  }

  renderElements = () => {
    const { ad_schedule } = this.state
    let elementsToRender = ad_schedule.map((segment, i) => {
      const {
        schedule_time,
        schedule_segment,
        schedule_segment_picked,
      } = segment
      const { segment_picked_employee } = this.state
      let pickedTime = segment_picked_employee === schedule_segment

      if (schedule_segment_picked) {
        return (
          <TouchableHighlight
            key={i}
            onPress={() => this.pickTime(schedule_segment)}
            style={shadowContainer}>
            <View style={pickedTime ? innerContainerPicked : innerContainer}>
              <Text style={pickedTime ? medium_white_14 : medium_black_14}>
                {schedule_time}
              </Text>
            </View>
          </TouchableHighlight>
        )
      }
    })

    return elementsToRender
  }

  updateAdAndGoToPayment = () => {
    const { ad_id, ad_employees, user_id, segment_picked_employee } = this.state
    const { updateAdEmployees } = this.props
    let _ad_employees = ad_employees
    _ad_employees.push({ user_id, ad_id, segment_picked_employee })

    const body = {
      ad_id,
      ad_employees: JSON.stringify(_ad_employees),
    }
    console.log('boasddy', body)
    // updateAdEmployees(body)
  }

  render() {
    console.log('this.state', this.state)

    return (
      <ScrollView
        contentContainerStyle={[centerColumn, padding._50, outerContainer]}>
        <Text style={[heavy_black_20]}>Välj tid för uppdraget</Text>
        <Text style={[medium_black_14, margin.top._10]}>
          Måndag, 5 Oktober 2018
        </Text>
        <View style={margin.top._10}>{this.renderElements()}</View>

        <View style={{ height: '15%' }}>
          <StyledButton
            style={styles.green}
            data={'Erbjud din hjälp'}
            onPress={this.updateAdAndGoToPayment}
          />
        </View>
      </ScrollView>
    )
  }
}

const {
  outerContainer,
  shadowContainer,
  innerContainer,
  innerContainerPicked,
} = _inputTimeScreen
const { medium_black_14, medium_white_14, heavy_black_20 } = text
const { centerColumn } = layout
const { margin, padding } = spacing
const styles = {
  green: 'green',
}

const mapStateToProps = state => ({
  ad_schedule: state.adsReducers.showAdReducer.item.ad_schedule,
  ad_employees: state.adsReducers.showAdReducer.item.ad_employees,
  ad_id: state.adsReducers.showAdReducer.item.ad_id,
  user_id: state.userReducers.loginReducer.data.user_id,
})
const mapDispatchToProps = { updateAdEmployees }
const _PickTimeScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(PickTimeScreen)
export default _PickTimeScreen
