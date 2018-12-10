import React from 'react'
import { Button, View } from 'react-native'
import { connect } from 'react-redux'
import _createUser from '../redux/2_actions/userActions/createUserAction'
import _login from '../redux/2_actions/userActions/loginAction'

class AuthScreen extends React.Component {
  state = {
    isLoggedIn: '',
  }

  componentDidMount() {
    const { navigation, isLoggedIn } = this.props
    const { navigate } = navigation

    this.setState({
      isLoggedIn,
    })

    navigate(isLoggedIn ? 'MainRoute' : 'AuthScreenRoute')
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isLoggedIn !== this.props.isLoggedIn) {
      const { navigation, isLoggedIn } = this.props
      const { navigate } = navigation

      this.setState({
        isLoggedIn,
      })

      navigate(isLoggedIn ? 'MainRoute' : 'AuthScreenRoute')
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { isLoggedIn } = nextProps

    if (isLoggedIn !== prevState.isLoggedIn) {
      return { isLoggedIn }
    } else return null
  }

  render() {
    const { _createUser, isLoggedIn, _login } = this.props

    return (
      <View style={{ padding: 100 }}>
        {isLoggedIn ? (
          <Button
            color="#841584"
            onPress={() => _login('FB')}
            title={'Logga in med FB'}
          />
        ) : (
          <Button
            color="#841584"
            onPress={() => _createUser('FB')}
            title={'Skapa användare med FB'}
          />
        )}
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.userReducers.loginReducer.isLoggedIn,
  }
}
const mapDispatchToProps = { _createUser, _login }
const _AuthScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthScreen)
export default _AuthScreen
