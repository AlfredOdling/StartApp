import React from 'react'
import { connect } from 'react-redux'
import { getAds } from '../redux/actions/getAdsActions'
import { showAd } from '../redux/actions/showAdActions'
import {
  FlatList,
  Text,
  View,
  ActivityIndicator,
} from 'react-native'
import ListItem from '../components/ListItem'
import Ad from '../components/Ad'
import base from '../styles/base'
import _FlatList from '../styles/_FlatList'

// import { MonoText } from '../components/StyledText'
// <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>

class HomeScreen extends React.Component {
  state = {
    isFetching: false,
    ads: [],
    showAdReducer: undefined,
  }

  componentWillMount() {
    const { getAds } = this.props
    getAds()
  }

  onRefresh() {
    this.setState({ isFetching: true },
      function () {
        const { getAds } = this.props
        getAds()
        this.setState({
          isFetching: false,
        })
      }
    )
  }

  renderFooter = () => {
    const { isFetching } = this.state
    if (!isFetching) { return null }

    return (
      <View style={{ marginVertical: 20 }}>
        <ActivityIndicator animating size='large' />
      </View>
    )
  }

  render() {
    const { isFetching } = this.state
    const { showAdState, showAd, ads, showAdItem } = this.props
console.log('this.props', this.props);


    if (showAdState) {
      return <Ad item={showAdItem} />
    } else {
      return (
        <FlatList
          contentContainerStyle={_FlatList.container}
          data={ads}
          keyExtractor={item => item.ad_id.toString()}
          onRefresh={() => this.onRefresh()}
          refreshing={isFetching}
          renderItem={({ item }) => <ListItem showAd={showAd} item={item} />}
          numColumns="2"
          ListFooterComponent={this.renderFooter} />
      )
    }
  }
}

const mapStateToProps = state => ({
  ads: state.getAdsReducer.data,
  showAdState: state.showAdReducer.showAd,
  showAdItem: state.showAdReducer.item,
})
const mapDispatchToProps = { getAds, showAd }

const _HomeScreen = connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
export default _HomeScreen
