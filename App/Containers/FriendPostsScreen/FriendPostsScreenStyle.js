import { StyleSheet, Dimensions } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes'
import { position } from 'polished'
import Colors from '../../Themes/Colors'

const width = Dimensions.get('window').width

export default StyleSheet.create({
  ...ApplicationStyles.screen,
})