import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import styles from './SwiperStyles'

const SwiperView = ({cards, currentCountOfLikes}) => {
  const getLikesCount = index => {
    console.log(index)
    currentCountOfLikes(cards[index].like)
  }

  return (
    <Swiper
      ref={swiper => {
        this.swiper = swiper;
      }}
      cards={cards}
      renderCard={card => (
        <View style={styles.card}>
          <Text style={styles.text}>{card.name}</Text>
        </View>
      )}
      infinite
      disableBottomSwipe={false}
      showSecondCard={false}
      cardStyle={styles.cardContainer}
      onSwiped={cardIndex => getLikesCount(cardIndex)}
      onSwipedAll={() => {console.log('onSwipedAll')}}
      cardIndex={0}
      backgroundColor={'#121212'}
      cardVerticalMargin={0}
      cardHorizontalMargin={0}
      containerStyle={styles.swiperContainer}
      stackSize={2}
      swipeBackCard>
    </Swiper>
  )
}

export default SwiperView