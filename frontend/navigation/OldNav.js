import React, { Component } from 'react'
import { BackHandler } from 'react-native'
import { createSwitchNavigator } from 'react-navigation'
import AuthLoadingScreen from '../screens/AuthLoadingScreen'
import MainTabNavigator from './AppNavigator'

export default class AppNavigatior2 extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  // onBackPress = () => {
  //   const { dispatch, navigationState } = this.props
  //   if (navigationState.stateForLoggedIn.index <= 1) {
  //     BackHandler.exitApp()
  //     return
  //   }
  //   dispatch(Navigationactions.back())
  //   return true
  // }

  render() {
    // <MainTabNavigator navigation={addNavigationHelpers({ dispatch, state })} />
    const switchNavigator = createSwitchNavigator({
      AuthLoading: AuthLoadingScreen,
      Main: MainTabNavigator,
      // Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    })

    return { switchNavigator }
  }
}
