import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { RNCamera, FaceDetector } from 'react-native-camera'
import { CAMERA_SCREEN_TITLE } from '../../Constants/variables'
import IconButton from '../../Components/IconButton'

import styles from './CameraScreenStyles'

class CameraScreen extends Component {
  static navigationOptions = {
    title: CAMERA_SCREEN_TITLE
  }

  takePicture = async() => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          videoStabilizationMode={RNCamera.Constants.VideoStabilization.standard}
        />
        <View style={styles.captureButton}>
          <IconButton
            name="video-camera"
            size={40}
            color="white"
            styles={styles.capture}
            onPressIcon={this.takePicture.bind(this)}
          />
        </View>
      </View>
    );
  }
}

export default CameraScreen