import React from 'react'
import { Text } from 'react-native'
// import { connect } from 'react-redux'
// import { addNavigationHelpers, NavigationActions } from 'react-navigation'
// import MainTabNavigator from './MainTabNavigator'
// import AuthLoadingScreen from '../screens/AuthLoadingScreen'

export default class AuthLoadingScreen extends React.Component {

  componentWillMount() {
    this.checkAuth()
  }

  checkAuth = () => {
    const { navigation } = this.props
    const { navigate } = navigation
    let isLoggedIn = false

    navigate(isLoggedIn? 'Main' : 'Auth')
  }

  render() {
    return <Text>Loa..ding</Text>
  }
}

// const mapStateToProps = state => {
//   return {
//     isLoggedIn: state.loginReducer.isLoggedIn,
//     navigationState: state.navigationReducer
//   }
// }

// export default connect(mapStateToProps)(AppNavigation)