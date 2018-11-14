import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { _login } from '../redux/actions/userActions'

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    const { navigation, isLoggedIn } = this.props
    const { navigate } = navigation

    navigate(isLoggedIn ? 'MainRoute' : 'AuthScreenRoute')
  }

  render() {
    return (
      <View>
        <Text>Vänta lite, kollar ifall du är inloggad...</Text>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.userReducer.isLoggedIn,
  }
}
// const mapDispatchToProps = { }
const _AuthLoadingScreen = connect(
  mapStateToProps,
  undefined
)(AuthLoadingScreen)
export default _AuthLoadingScreen
