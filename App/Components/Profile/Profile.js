import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Image } from 'react-native-elements'
import styles from './ProfileStyles'

const Profile = ({photo, type}) => (
  <Image
    source={{ uri: photo }}
    style={ type==='profile' ? styles.profilePhoto : styles.thumbnail }
    PlaceholderContent={<ActivityIndicator />}
  />
)

export default Profile