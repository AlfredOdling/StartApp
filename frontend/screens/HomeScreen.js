import React from 'react'
import { connect } from 'react-redux'
import { FlatList, View, ActivityIndicator } from 'react-native'
import GridView from 'react-native-super-grid'
import { getAds } from '../redux/actions/getAdsActions'
import { showAd } from '../redux/actions/showAdActions'
import ListItem from '../components/ListItem'
import _FlatList from '../styles/_FlatList'

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
    this.setState({ isFetching: true }, function() {
      const { getAds } = this.props
      getAds()
      this.setState({
        isFetching: false,
      })
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
      <FlatList
        contentContainerStyle={_FlatList.container}
        data={ads}
        keyExtractor={item => item.ad_id.toString()}
        onRefresh={() => this.onRefresh()}
        refreshing={isFetching}
        renderItem={({ item }) => (
          <ListItem showAd={showAd} item={item} navigate={navigate} />
        )}
        numColumns="2"
        centerContent
        ListFooterComponent={this.renderFooter}
      />
    )
  }
}

const mapStateToProps = state => ({
  ads: state.getAdsReducer.data,
})
const mapDispatchToProps = { getAds, showAd }

const _HomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
export default _HomeScreen
