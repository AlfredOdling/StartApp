import { StyleSheet } from 'react-native'

// let grey = 'rbg(242, 242, 242)'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
    margin: 20,
  },
  black_title: {
    fontFamily: 'Avenir-Black',
    fontSize: 20,
    color: 'rgb(0, 0, 0)',
    marginTop: 10,
  },
  description: {
    fontFamily: 'Avenir-Medium',
    fontSize: 14,
    color: 'rgb(0, 0, 0)',
    marginTop: 10,
  },
  price: {
    fontFamily: 'Avenir-Black',
    fontSize: 18,
    color: 'rgb(147, 218, 98)',
    marginTop: 40,
  },
  distance: {
    fontFamily: 'Avenir-Heavy',
    fontSize: 14,
    color: 'rgb(0, 0, 0)',
  },
  black_separator: {
    height: 1,
    backgroundColor: 'rgb(0, 0, 0)',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#7FC736',
    shadowOffset:{  width: 10,  height: 10,  },
    shadowColor: 'black',
    shadowOpacity: 0.5,
  },
  buttonText: {
    fontFamily: 'Avenir-Medium',
    fontSize: 22,
    color: 'rgb(0, 0, 0)',
  }
})