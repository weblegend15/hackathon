import { StyleSheet, Dimensions } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes'
import Colors from '../../Themes/Colors'

const width = Dimensions.get('window').width

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  carouselItem: {
    margin: 10,
    backgroundColor: Colors.black
  },
  name: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.snow
  },
})