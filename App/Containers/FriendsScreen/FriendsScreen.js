import React, { Component } from 'react'
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import FRIENDS from '../../Constants/friends'
import { FRIENDS_SCREEN_TITLE } from '../../Constants/variables'
import styles from './FriendsScreenStyle'
import Colors from '../../Themes/Colors'

const { width } = Dimensions.get('window');

class FriendsScreen extends Component {
  componentDidMount() {
		setTimeout(() => {this.scrollView.scrollTo({x: -40}) }, 1)
  }

  static navigationOptions = {
    title: FRIENDS_SCREEN_TITLE
  }

  visitYourFriendPost = id => () => {
    console.log(id)
  }

  renderFriend = friend => {
    const { id, name, story } = friend

    return (
      <TouchableOpacity
        key={id}
        style={styles.friendCard}
        onPress={this.visitYourFriendPost(id)}
      >
        <Icon name='user-circle-o' size={70} color={Colors.frost} />
        <View style={styles.friendName}>
          <Text style={styles.name}>
            {name}
          </Text>
        </View>
        <View style={styles.friendStory}>
          <Text
            style={styles.story}
          >
            {story}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  render () {
    return (
      <>
        <Text style={styles.contentTitle}>
          Visit your friend's profile
        </Text>
        <ScrollView
          ref={scrollView => this.scrollView = scrollView}
          horizontal
          snapToInterval={width - 100}
          snapToAlignment={"center"}
          decelerationRate={0}
          contentInset={{
            top: 0,
            left: 30,
            bottom: 0,
            right: 30,
          }}
        >
          { FRIENDS.map(friend => this.renderFriend(friend)) }
        </ScrollView>
      </>
    )
  }
}

export default FriendsScreen