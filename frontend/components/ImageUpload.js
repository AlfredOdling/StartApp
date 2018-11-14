import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, View } from 'react-native'
import { ImagePicker, Permissions } from 'expo'
import { postImage } from '../redux/actions/postImageActions'

class ImageUpload extends Component {
  componentDidUpdate(prevProps) {
    const { status, navigation } = this.props
    const { navigate } = navigation

    if (status !== prevProps.status && status === 200) {
      navigate('PostAdScreenRoute')
    }
  }

  render() {
    return (
      <View>
        <Button
          onPress={this._pickImage}
          title="Pick an image from camera roll"
        />

        <Button onPress={this._takePhoto} title="Take a photo" />
      </View>
    )
  }

  _takePhoto = async () => {
    const { status: cameraPerm } = await Permissions.askAsync(
      Permissions.CAMERA
    )

    const { status: cameraRollPerm } = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    )

    // only if user allows permission to camera AND camera roll
    if (cameraPerm === 'granted' && cameraRollPerm === 'granted') {
      let pickerResult = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
      })

      const { postImage } = this.props
      postImage(pickerResult)
    }
  }

  _pickImage = async () => {
    const { status: cameraRollPerm } = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    )

    // only if user allows permission to camera roll
    if (cameraRollPerm === 'granted') {
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      })

      const { postImage } = this.props
      postImage(pickerResult)
    }
  }
}

const mapStateToProps = state => ({
  status: state.postImageReducer.status,
})
const mapDispatchToProps = { postImage }
const _ImageUpload = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageUpload)
export default _ImageUpload
