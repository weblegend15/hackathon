import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import Video from 'react-native-video';
import IconButton from '../../Components/IconButton';
import { Images } from '../../Themes'
import { TITLE, DEFAULT_POSTS } from '../../Constants/variables'
import styles from './LaunchScreenStyles'

class LaunchScreen extends Component {
  static navigationOptions = {
    title: TITLE
  }

  _renderItem = item => {
    return (
      <Video
        key={item.id}
        source={{uri: item.src}}
        style={styles.backgroundVideo}
      />
    )
  }

  _turnOnCamera = () => {
    const { navigation } = this.props

    navigation.push('CameraScreen')
  }
  
  render () {
    return (
      <View style={styles.mainContainer} >
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.videosContainer}>
            { DEFAULT_POSTS.map(item => this._renderItem(item)) }
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <IconButton
            name="plus-square-o"
            size={20}
            color="black"
            onPressIcon={this._turnOnCamera}
          />
        </View>
      </View>
    )
  }
}

export default LaunchScreen