import React, { Component, useState } from 'react'
import {
  ScrollView,
  Text,
  View,
  SafeAreaView,
  Button
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import CarouselView from '../../Components/Carousel'
import SwiperView from '../../Components/Swiper'
import Profile from '../../Components/Profile'
import { TITLE, USER_ID } from '../../Constants/variables'
import { FRIENDS_CARDS, FRIENDS } from '../../Constants/friends'
import styles from './LaunchScreenStyles'

const LaunchScreen = () => {
  const [ userId, setUserId ] = useState(1)
  const [ currentImageLike, setCurrentImageLikes ] = useState(0)
  const friendCard = FRIENDS_CARDS.filter(friendCard => friendCard.id === userId)
  const cards = friendCard[0].cards

  const friend = FRIENDS.filter(friend => friend.id === userId)
  const { thumbnail, name } = friend[0]
  return (
    <View style={styles.mainContainer} >
      <View style={styles.carouselView}>
        <CarouselView chooseUser={id => setUserId(id)} />
      </View>
      <View style={styles.shortProfile}>
        <View style={styles.photo}>
          <Profile photo={thumbnail} type="thumb" />
          <Text style={styles.proName}>{name}</Text>
        </View>
        <View style={{marginRight: 10}}>
          <Icon name={'ellipsis-h'} size={25} style={styles.settings} />
        </View>
      </View>
      <SwiperView cards={cards} currentCountOfLikes={count => setCurrentImageLikes(count)} />
      <View style={styles.effect}>
        <View style={styles.signs}>
          <Icon name={'smile-o'} size={30} style={styles.sign} />
          <Icon name={'commenting-o'} size={30} style={styles.sign} />
          <Icon name={'share'} size={30} style={styles.sign} />
        </View>
        <Text style={styles.timer}>13 mins ago</Text>
      </View>
      <View>
        <Text style={styles.likes}>
          {currentImageLike > 1
            ? `${currentImageLike} likes`
            : `${currentImageLike} like`
          }
        </Text>
      </View>
    </View>
  )
}

LaunchScreen.navigationOptions = {
  title: TITLE,
  color: 'white',
  backgroundColor: '#121212'
}

export default LaunchScreen