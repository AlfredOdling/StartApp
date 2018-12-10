import React from 'react'
import { View, TouchableHighlight, Text, ScrollView } from 'react-native'
import _inputTimeScreen from '../styles/_inputTimeScreen'
import { text, layout, spacing, figures } from '../styles/_compositions'
// import { Separator } from '../components/styled/StyledComponents'

export default class InputTimeScreen extends React.Component {
  state = {
    ad_schedule: [],
  }

  componentDidMount() {
    const { ad_schedule } = this.props.navigation.state.params

    this.setState({
      ad_schedule,
    })
  }

  pickTime = schedule_segment => {
    const { ad_schedule } = this.state
    const { navigation } = this.props
    const { setParams } = navigation

    const index = ad_schedule.findIndex(el => {
      return el.schedule_segment === schedule_segment
    })

    ad_schedule[index].schedule_segment_picked = !ad_schedule[index]
      .schedule_segment_picked

    this.setState(
      {
        ad_schedule,
      },
      () => {
        const { ad_schedule } = this.state
        setParams({
          ad_schedule,
        })
      }
    )
  }

  renderElements = () => {
    const { ad_schedule } = this.state
    let elementsToRender = ad_schedule.map((segment, i) => {
      const {
        schedule_time,
        schedule_segment_picked,
        schedule_segment,
      } = segment
      const _innerContainer = schedule_segment_picked
        ? innerContainerPicked
        : innerContainer
      const text = schedule_segment_picked ? medium_white_14 : medium_black_14

      return (
        <TouchableHighlight
          key={i}
          onPress={() => this.pickTime(schedule_segment)}
          style={shadowContainer}>
          <View style={_innerContainer}>
            <Text style={text}>{schedule_time}</Text>
          </View>
        </TouchableHighlight>
      )
    })

    return elementsToRender
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={[centerColumn, padding._50, outerContainer]}>
        <Text style={[heavy_black_20]}>Ange möjliga tider</Text>
        <Text style={[medium_black_14, margin.top._10]}>
          Måndag, 5 Oktober 2018
        </Text>
        <View style={margin.top._10}>{this.renderElements()}</View>
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
const { black_separator } = figures
const _styles = {
  separator: 'black',
}
