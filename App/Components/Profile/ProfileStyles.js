import { StyleSheet, Dimensions } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes'
import Colors from '../../Themes/Colors'

const width = Dimensions.get('window').width

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: Colors.frost,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: Colors.frost,  
  }
})