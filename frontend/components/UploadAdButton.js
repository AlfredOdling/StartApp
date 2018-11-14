import React from 'react'
import { View } from 'react-native'
import { StyledButton } from '../components/styled/StyledComponents'

export const UploadAdButton = ({ _postAd, isFetching, hasAllFields }) => {
  return (
    <View>
      {hasAllFields() ? (
        <StyledButton
          onPress={_postAd}
          style={isFetching ? styles.orangeButton : styles.greenButton}
          data={isFetching ? 'Laddar...' : 'Lägg in annons'}
        />
      ) : (
        <View style={{ opacity: 0.4 }}>
          <StyledButton
            onPress={() => {}}
            style={styles.greenButton}
            data={'Lägg in annons'}
          />
        </View>
      )}
    </View>
  )
}

const styles = {
  greenButton: 'green',
  orangeButton: 'orange',
}
