import React from 'react'
import { Text, Button, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import _logout from '../redux/2_actions/userActions/logoutAction'
import _getSpecificAds from '../redux/2_actions/adsActions/getSpecificAdsAction'
import EditAds from '../components/EditAds'

class ProfileScreen extends React.Component {
  componentDidMount() {
    const { _getSpecificAds, user_id } = this.props
    _getSpecificAds(user_id)
  }

  goToPayment = () => {
    const { navigation } = this.props
    const { navigate } = navigation
    navigate('PaymentScreenRoute')
  }

  render() {
    const { name, _logout, userAds } = this.props

    return (
      <ScrollView style={{ padding: 100 }}>
        <Button
          color="#841584"
          onPress={this.goToPayment}
          title={'Gå till betalning'}
        />

        <Text>User Name: {name}</Text>
        <Button color="#841584" onPress={_logout} title={'Logga ut'} />
        <Text>Mina uppdrag</Text>
        <EditAds callGetAds={this.callGetAds} ads={userAds} />
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    name: state.userReducers.loginReducer.data.user_full_name,
    user_id: state.userReducers.loginReducer.data.user_id,
    userAds: state.adsReducers.getSpecificAdsReducer.data,
  }
}
const mapDispatchToProps = { _logout, _getSpecificAds }
const _ProfileScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen)
export default _ProfileScreen
