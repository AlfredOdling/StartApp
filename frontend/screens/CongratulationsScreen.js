import React from 'react'
import { View } from 'react-native'
import { LinearGradient } from 'expo'
import {
   StyledText,
   StyledButton,
} from '../components/styled/StyledComponents'

export default class CongratulationsScreen extends React.Component {
   _toHome = () => {
      const { navigation } = this.props
      const { navigate } = navigation
      navigate('HomeScreenRoute')
   }

   render() {
      return (
         <LinearGradient style={{flex: 1}} colors={['#BFFF72', '#217A06']} >
            <StyledText style={styles.title} data={'Grattis!'} />

            <StyledText style={styles.msg} data={'Annonsen är nu utlagd.Vi meddelar dig när du har fått en match med någon av våra uppdragstagare. Tack för att du använder våran tjänst!'}/>

            <StyledButton
               onPress={this._toHome}
               style={styles.whiteButton}
               data={'Gå vidare'} />
         </LinearGradient>
      )
   }
}

const styles = {
   title: 'black_white_45',
   msg: 'medium_white_14',
   whiteButton: 'white',
}
