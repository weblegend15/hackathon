import React, { PureComponent } from 'react'
import {
  ScrollView,
  Text,
  ActivityIndicator,
  View,
  SafeAreaView
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Video from 'react-native-video'
import styles from './PostListStyles'
import Colors from '../../Themes/Colors'

class PostList extends PureComponent {
  renderPost = post => {
    const { userName } = this.props
    const { id, src, comment } = post

    return (
      <View key={id} style={styles.postItem}>
        <View style={styles.userInfo}>
          <Icon name='user-circle-o' style={styles.avatar} size={20} color={Colors.black} />
          <Text>{userName}</Text>
        </View>

        <Video
          repeat
          playWhenInactive
          source={{uri: src}}
          style={styles.backgroundVideo}
        />
        <View style={styles.comments}>
          <Text style={styles.content}>{comment}</Text>
        </View>
      </View>
    )
  }

  render () {
    const { postList } = this.props
    if (!postList.length) {
      return (
        <SafeAreaView style={styles.emptyPost}>
          <View style={styles.alert}>
            <Text>No Post...</Text>
          </View>
          <View>
            <Text>Please record your own videos and share them</Text>
          </View>
        </SafeAreaView>
      )
    }
    return (
      <SafeAreaView style={styles.videosContainer}>
        {postList.map(post => this.renderPost(post))}
      </SafeAreaView>
    )
  }
}

export default PostList
