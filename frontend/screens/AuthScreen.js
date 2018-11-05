import React from 'react'
import { Text, Button, View } from 'react-native'
import { connect } from 'react-redux'
import { _login } from '../redux/actions/userActions'

class AuthScreen extends React.Component {
  componentWillMount() {
    const { navigation, isLoggedIn } = this.props
    const { navigate } = navigation

    navigate(isLoggedIn ? 'MainRoute' : 'AuthScreenRoute')
  }

  render() {
    const { _login } = this.props

    return (
      <View>
        <Button onPress={this._login}>Logga in med FB</Button>
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
