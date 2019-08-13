import React, { Component } from 'react'
import { ScrollView, Text, View, SafeAreaView } from 'react-native'
import Video from 'react-native-video'
import PostList from '../../Components/PostList'
import { TITLE, DEFAULT_POSTS } from '../../Constants/variables'
import styles from './LaunchScreenStyles'

class LaunchScreen extends Component {
  static navigationOptions = {
    title: TITLE
  }

  render () {
    return (
      <View style={styles.mainContainer} >
        <View style={styles.centered}>
          <Text style={styles.hero}>Welcome to Hackathon</Text>
        </View>
        <ScrollView>
          <PostList postList={DEFAULT_POSTS} />
        </ScrollView>
      </View>
    )
  }
}

export default LaunchScreen