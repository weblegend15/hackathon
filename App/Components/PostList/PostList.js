import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { PostSelectors } from '../../Redux/PostRedux'
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
    const { id, src, title, comment } = post

    return (
      <View key={id}>
        <View style={styles.userInfo}>
          <Icon name='user-circle-o' style={styles.avatar} size={20} color={Colors.frost} />
          <Text>WarrenAnderson4036</Text>
        </View>

        <Video
          source={{uri: src}}
          style={styles.backgroundVideo}
        />
        <View style={styles.comments}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content}>{comment}</Text>
        </View>
      </View>
    )
  }

  renderListLoading = () => (
    <View>
      <ActivityIndicator size={'large'} />
    </View>
  );

  render () {
    const { postList, isLoading, hasError } = this.props

    if (hasError) {
      return (
        <View style={styles.container}>
          <Text>Error fetching postList...</Text>
        </View>
      );
    }

    if (isLoading) {
      return this.renderListLoading
    }

    return (
      <SafeAreaView style={styles.videosContainer}>
        {postList.map( post => this.renderPost(post))}
      </SafeAreaView>
    )
  }
}

const mapStateToProps = (state) => ({
  hasError: PostSelectors.selectPostsHasError(state),
  isLoading: PostSelectors.selectPostsLoading(state),
  postList: PostSelectors.selectPosts(state)
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
