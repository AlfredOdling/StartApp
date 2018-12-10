import React from 'react'
import { connect } from 'react-redux'
import { FlatList, View, ActivityIndicator, ScrollView } from 'react-native'
import getAds from '../redux/2_actions/adsActions/getAdsAction'
import { showAd } from '../redux/2_actions/adsActions/showAdActions'
import ListItem from '../components/ListItem'
import _FlatList from '../styles/_FlatList'

class HomeScreen extends React.Component {
  state = {
    isFetching: false,
    ads: [],
    showAdReducer: undefined,
  }

  componentDidMount() {
    const { getAds } = this.props
    getAds()
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { ads } = nextProps
    let returnStatement = []

    if (ads !== prevState.ads) {
      returnStatement = {
        isFetching: false,
      }
    }
    return returnStatement
  }

  onRefresh = () => {
    this.setState({ isFetching: true }, function() {
      const { getAds } = this.props
      getAds()
    })
  }

  renderFooter = () => {
    const { isFetching } = this.state
    if (!isFetching) {
      return null
    }

    return (
      <View style={{ marginVertical: 20 }}>
        <ActivityIndicator animating size="large" />
      </View>
    )
  }

  render() {
    const { isFetching } = this.state
    const { showAd, ads, navigation } = this.props
    const { navigate } = navigation

    return (
      <ScrollView>
        <FlatList
          contentContainerStyle={_FlatList.container}
          data={ads}
          keyExtractor={item => item.ad_id.toString()}
          onRefresh={this.onRefresh}
          refreshing={isFetching}
          renderItem={({ item }) => (
            <ListItem showAd={showAd} item={item} navigate={navigate} />
          )}
          numColumns="2"
          centerContent
          ListFooterComponent={this.renderFooter}
        />
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  ads: state.adsReducers.getAdsReducer.data,
})
const mapDispatchToProps = { getAds, showAd }
const _HomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
export default _HomeScreen
