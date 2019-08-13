import React, { useGlobal } from 'reactn';
import { Component } from 'react'
import { ScrollView, Text, View, SafeAreaView } from 'react-native'
import Video from 'react-native-video'
import PostList from '../../Components/PostList'
import { TITLE } from '../../Constants/variables'
import styles from './LaunchScreenStyles'

const LaunchScreen = () => {
  const [posts] = useGlobal('posts');

  return (
    <View style={styles.mainContainer} >
      <ScrollView>
        <View style={styles.centered}>
          <Text style={styles.hero}>Welcome to Hackathon</Text>
        </View>
        <PostList postList={posts} />
      </ScrollView>
    </View>
  )
};

LaunchScreen.navigationOptions = {
  title: TITLE
}

export default LaunchScreen