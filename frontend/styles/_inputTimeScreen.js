import { StyleSheet } from 'react-native'
import { shadow } from './_styledComponents'
import * as _base from './_base'

const innerContainer = {
  ..._base.layout._flex,
  ..._base.layout._spaceCrossAxis.center,
  flex: 1,
  borderRadius: 8,
  overflow: 'hidden',
  padding: _base.dimension._10,
  backgroundColor: _base.colors.c_white,
}

export default StyleSheet.create({
  shadowContainer: {
    height: _base.dimension._35,
    width: _base.dimension._200,
    ...shadow,
    margin: _base.dimension._3,
  },
  innerContainer,
  innerContainerPicked: {
    ...innerContainer,
    backgroundColor: _base.colors.c_orange,
  },
  outerContainer: {
    flex: 1,
    backgroundColor: _base.colors.c_white,
  },
})
