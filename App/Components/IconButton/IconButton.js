import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const IconButton = props => {
  const { name, size, color, onPressIcon, styles } = props

  return (
    <TouchableOpacity onPress={onPressIcon}>
      <Icon name={name} size={size} color={color} style={styles} />
    </TouchableOpacity>
  )
}

export default IconButton