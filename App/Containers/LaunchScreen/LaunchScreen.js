import React, { Component } from 'react'
import { ScrollView, Text, View, FlatList } from 'react-native'
import Video from 'react-native-video';
import { RNCamera, FaceDetector } from 'react-native-camera'
import { Images } from '../../Themes'
import { TITTLE, DEFAULT_POSTS } from '../../Constants/variables'
import styles from './LaunchScreenStyles'

export default class LaunchScreen extends Component {
  static navigationOptions = {
    title: TITTLE
  };

  _keyExtractor = (item, index) => item.id

  _renderItem = item => {
    return (
      <Video
        key={item.id}
        source={{uri: item.src}}
        style={styles.backgroundVideo}
      />
    )
  }
  
  render () {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.videosContainer}>
          { DEFAULT_POSTS.map(item => this._renderItem(item)) }
        </View>
      </View>
    )
  }
}
