import React, { useGlobal } from 'reactn'
import { useState } from 'react'
import {
  ScrollView,
  View,
  SafeAreaView,
  FlatList,
  TextInput,
  Text
} from 'react-native'
import Video from 'react-native-video'
import { NEW_POST_TITLE } from '../../Constants/variables'
import IconButton from '../../Components/IconButton'
import reactn, { setGlobal } from 'reactn'
import styles from './PostShareScreenStyles'

import { StackActions, NavigationActions } from 'react-navigation'

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Camera' })],
})

const PostShareScreen = ({ navigation }) => {
  const [comment, setComment] = useState('')
  const [ posts, setPosts ] = useGlobal('posts')
  const uri = navigation.getParam('newVideoUrl')

  const sharePost = () => {
    setPosts([...posts, {
      src: uri,
      comment,
      id: Math.floor(Math.random() * 100)
    }])
    navigation.dispatch(resetAction)
    navigation.navigate('LaunchScreen')
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.postInfo}>
          <Video
            source={{uri}}
            style={styles.backgroundVideo}
          />
          <TextInput
            style={styles.inputTitle}
            multiline
            autoFocus
            placeholder="please add your comment"
            placeholderTextColor="grey"
            onChangeText={text => setComment(text)}
            value={comment}
          />
          <IconButton
            name='share-square-o'
            size={30}
            styles={styles.shareIcon}
            onPressIcon={sharePost} />
      </View>
    </SafeAreaView>
  )
}

PostShareScreen.navigationOptions = ({ navigation }) => {
  return {
    title: NEW_POST_TITLE,
    headerLeft: <IconButton
                  name='angle-left'
                  size={30}
                  styles={styles.backIcon}
                  onPressIcon={() => navigation.goBack(null)} />
  }
}

export default PostShareScreen