import { StyleSheet } from 'react-native'

// let grey = 'rbg(242, 242, 242)'

export default StyleSheet.create({
  container: {
    backgroundColor: 'rgb(180, 180, 180)',
    margin: 20,
    height: 157,
    width: 157,
    borderRadius: 8,
    overflow: 'hidden',
  },
  containerContent: {
    padding: 10,
  },
  title: {
    fontFamily: 'Avenir-Black',
    fontSize: 20,
    color: 'rgb(255, 255, 255)',
  },
  price: {
    fontFamily: 'Avenir-Black',
    fontSize: 18,
    color: 'rgb(147, 218, 98)',
  },
  distance: {
    fontFamily: 'Avenir-Heavy',
    fontSize: 14,
    color: 'rgb(255, 255, 255)',
  },
  separator: {
    height: 1,
    // width: '90%',
    backgroundColor: 'rgb(255, 255, 255)',
  },
})