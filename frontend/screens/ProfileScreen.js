import React from 'react'
import { Text, Button, View } from 'react-native'
import { connect } from 'react-redux'
import { _login } from '../redux/actions/userActions'

class ProfileScreen extends React.Component {
  componentWillMount() {
    const { navigation, isLoggedIn } = this.props

  }

  render() {
    const { isLoggedIn, user } = this.props

    return (
      <View style={{ padding: 100 }}>

      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.loginReducer.isLoggedIn,
    user: state.loginReducer.user,
  }
}
const mapDispatchToProps = { _login }
const _ProfileScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen)
export default _ProfileScreen
