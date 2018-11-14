import React from 'react'
import { Text, Button, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { _logout } from '../redux/actions/userActions'
import { _getSpecificAds } from '../redux/actions/getSpecificAdsActions'
import { EditAds } from '../components/EditAds'

class ProfileScreen extends React.Component {
  componentDidMount() {
    const { _getSpecificAds, user_id } = this.props
    _getSpecificAds(user_id)
  }

  render() {
    const { name, _logout, userAds } = this.props

    return (
      <ScrollView style={{ padding: 100 }}>
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
    name: state.userReducer.data.user_full_name,
    user_id: state.userReducer.data.user_id,
    userAds: state.getSpecificAdsReducer.data,
  }
}
const mapDispatchToProps = { _logout, _getSpecificAds }
const _ProfileScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen)
export default _ProfileScreen
