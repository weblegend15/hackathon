import React, { useGlobal } from 'reactn'
import { PureComponent } from 'react'
import {
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  Dimensions
} from 'react-native'
import Profile from '../Profile';
import { FRIENDS, FRIENDS_POSTS } from '../../Constants/friends'
import { FRIENDS_SCREEN_TITLE } from '../../Constants/variables'
import styles from './CarouselStyles'

const { width } = Dimensions.get('window')

class CarouselView extends PureComponent {
  componentDidMount() {
    setTimeout(() => { this.scrollView.scrollTo({ x: -40 }) } ,1)
  }

  getUserId = id => () => {
    this.props.chooseUser(id)
  }
  renderFriend = friend => {
    const { id, name } = friend;

    return (
      <TouchableOpacity
        key={id}
        style={styles.carouselItem}
        onPress={this.getUserId(id)}
      >
        <Profile photo={friend.photo} type="profile" />
        <View>
          <Text style={styles.name}>
            {name}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <ScrollView
        ref={scrollView => this.scrollView = scrollView}
        horizontal
        snapToInterval={width - 150}
        snapToAlignment={"center"}
        decelerationRate={0}
        contentInset={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 30,
        }}
      >
        { FRIENDS.map(friend => this.renderFriend(friend)) }
      </ScrollView>
    )
  }
}

export default CarouselView