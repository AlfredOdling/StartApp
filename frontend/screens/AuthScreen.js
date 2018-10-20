import React from 'react'
import { Text, Button, View } from 'react-native'
import { connect } from 'react-redux'
import { _login } from '../redux/actions/userActions'

class AuthScreen extends React.Component {
  componentWillMount() {
    const { navigation, isLoggedIn, _login } = this.props
    const { navigate } = navigation

    _login()
    navigate(isLoggedIn ? 'MainRoute' : 'AuthScreenRoute')
  }

  render() {
    return (
      <View>
        <Text>AuthScreen</Text>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.loginReducer.isLoggedIn,
  }
}
const mapDispatchToProps = { _login }
const _AuthScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthScreen)
export default _AuthScreen
