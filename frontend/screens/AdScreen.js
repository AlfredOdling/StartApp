import React from 'react'
import { connect } from 'react-redux'
import { View, ScrollView } from 'react-native'
import {
  Separator,
  StyledText,
  StyledButton,
  StyledAdImage,
  StyledProfileButton,
} from '../components/styled/StyledComponents'
import { styledComponents } from '../styles/_styledComponents'

const AdScreen = ({ item }) => {
  const { adContainer, scrollViewContainer } = styledComponents
  const {
    ad_title,
    ad_description,
    ad_time,
    ad_price,
    ad_imageUri,
    ad_id,
  } = item

  return (
    <ScrollView style={scrollViewContainer}>
      <View style={adContainer}>
        <StyledAdImage data={ad_imageUri} />
        <StyledText style={styles.title} data={ad_title} />
        <Separator style={styles.separator} />
        <StyledText style={styles.description} data={ad_description} />
        <StyledText style={styles.price} data={ad_price + ' kr'} />
        <StyledText style={styles.distance} data={ad_id + ' km'} />
        <StyledText style={styles.date} data={ad_time} />
        <StyledProfileButton
          data={{ name: 'Alfred Ödling', memberSince: 'Juni 2016', ad_imageUri }}
        />
        <StyledButton style={styles.green} data={'Utför arbete'} />
      </View>
    </ScrollView>
  )
}

const styles = {
  title: 'black_black_20',
  separator: 'black',
  description: 'medium_black_14',
  price: 'ad_price',
  distance: 'black_distance',
  date: 'date',
  green: 'green',
}

const mapStateToProps = state => ({
  item: state.showAdReducer.item,
})
// const mapDispatchToProps = { getAds, showAd }

const _AdScreen = connect(
  mapStateToProps,
  undefined
)(AdScreen)
export default _AdScreen
