import React from 'react'
import { View } from 'react-native'
import EditAdsElement from './EditAdsElement'

const EditAds = ({ callGetAds, ads }) => {
  const renderAds = () => {
    let adsToRender = ads.map((ad, i) => {
      return <EditAdsElement key={i} ad={ad} callGetads={callGetAds} />
    })
    return adsToRender
  }

  return <View>{renderAds()}</View>
}

export default EditAds
