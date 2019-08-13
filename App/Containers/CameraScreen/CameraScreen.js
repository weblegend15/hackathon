import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  Text
} from 'react-native'
import { RNCamera, FaceDetector } from 'react-native-camera'
import { CAMERA_SCREEN_TITLE } from '../../Constants/variables'
import IconButton from '../../Components/IconButton'
import styles from './CameraScreenStyles'

class CameraScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recordOptions: {},
      recording: false,
      videoUrl: ''
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: CAMERA_SCREEN_TITLE,
      headerLeft: <IconButton
                    name='angle-left'
                    size={30}
                    styles={styles.backIcon}
                    onPressIcon={() => navigation.goBack(null)} />
    }
  }

  startRecording = async () => {
    const { navigation } = this.props

    this.setState({ recording: true })
    const { uri, codec = "mp4" } = await this.camera.recordAsync()

    this.setState({ recording: false, processing: true })
    const type = `video/${codec}`
    this.setState({ processing: false, videoUrl: uri })
  }

  stopRecording = () => {
    const { navigation } = this.props

    this.camera.stopRecording()
    setTimeout(() => {
      const { videoUrl } = this.state
      navigation.push('PostShare', { newVideoUrl: videoUrl })
    }, 500)
  }

  renderSwitchButton = () => {
    const { recording, processing } = this.state

    let button = (
      <IconButton
        name="video-camera"
        size={40}
        color="black"
        styles={styles.capture}
        onPressIcon={this.startRecording}
      />
    )

    if (recording) {
      button = (
        <IconButton
          name="stop-circle-o"
          size={40}
          color="red"
          styles={styles.capture}
          onPressIcon={this.stopRecording}
        />
      )
    }

    if (processing) {
      button = (
        <View style={styles.capture}>
          <ActivityIndicator animating size='small' />
        </View>
      )
    }

    return button
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          videoStabilizationMode={RNCamera.Constants.VideoStabilization.standard}
        />
        <View style={styles.captureButton}>
          {this.renderSwitchButton()}
        </View>
      </View>
    )
  }
}

export default CameraScreen