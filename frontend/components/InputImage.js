import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { StyledText, StyledIcon } from './styled/StyledComponents'
import { styledComponents } from '../styles/_styledComponents'

export const InputImage = ({ navigation, ad_imageUri }) => {
  const pickImage = () => {
    const { navigate } = navigation
    navigate('ImageUploadRoute')
  }

  const { inputPhoto, inputPhotoUploaded } = styledComponents

  return (
    <TouchableOpacity onPress={() => pickImage()}>
      {ad_imageUri ? (
        <View style={inputPhotoUploaded}>
          <Image
            style={{ width: '100%', height: '100%' }}
            source={{ uri: ad_imageUri }}
          />
        </View>
      ) : (
        <View style={inputPhoto}>
          <StyledIcon
            width={60}
            height={50}
            source={require('../assets/images/photo-camera.png')}
          />
          <StyledIcon
            width={22}
            height={22}
            marginVertical={8}
            source={require('../assets/images/add.png')}
          />
          <StyledText style={styles.adPhoto} data={'Lägg till foto'} />
        </View>
      )}
    </TouchableOpacity>
  )
}

const styles = {
  adPhoto: 'medium_black_14',
  optional: 'light_black_12',
  descriptionLength: 'medium_black_12',
  when: 'medium_black_14',
  greenButton: 'green',
  orangeButton: 'orange',
}
