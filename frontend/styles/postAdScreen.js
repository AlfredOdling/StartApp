import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  greyBox: {
    backgroundColor: 'rgb(242, 242, 242)',
    marginHorizontal: 25,
    marginTop: 25,
    padding: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  greyBox2: {
    backgroundColor: 'rgb(242, 242, 242)',
    margin: 25,
    padding: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 5,
  },
  addPhoto: {
    marginTop: 55,
    height: 250,
  },
  p: {
    fontFamily: 'Avenir-Medium',
  },
  p1: {
    fontSize: 14,
  },
  p2: {
    fontSize: 12,
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(127, 127, 127)',
    height: 30,
    minWidth: 60,
    marginBottom: 25,
  },
  input: {
    height: 30,
    minWidth: 60,
    backgroundColor: 'transparent',
  },
  cameraImage: {
    width: 60,
    height: 50,
    resizeMode: 'contain',
  },
  addImage: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    marginVertical: 15,
  },
  postAdButton: {
    height: 60,
    margin: 25,
    padding: 20,
    backgroundColor: 'rgb(127, 199, 54)',
  },
})