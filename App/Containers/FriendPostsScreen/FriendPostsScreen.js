import React, { Component } from 'react'
import { ScrollView, Text, View, SafeAreaView } from 'react-native'
import PostList from '../../Components/PostList'
import { FRIENDS_POSTS_SCREEN_TITLE } from '../../Constants/variables'
import styles from './FriendPostsScreenStyle'

const FriendPostsScreen = ({ navigation }) => {
  const postList = navigation.getParam('postList')
  const userName = navigation.getParam('userName')

  return (
    <View style={styles.mainContainer} >
      <ScrollView>
        <PostList postList={postList} userName={userName} />
      </ScrollView>
    </View>
  )
}

FriendPostsScreen.navigationOptions = {
  title: FRIENDS_POSTS_SCREEN_TITLE
}

export default FriendPostsScreen