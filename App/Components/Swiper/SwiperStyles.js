import { StyleSheet, Dimensions } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes'
import { position } from 'polished'
import Colors from '../../Themes/Colors'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  containerStyle: {
    backgroundColor: Colors.darkBlack
  },
  swiperContainer: {
    marginTop: 205,
    height: 250
  },
  cardContainer: {
    height: 200
  },
  backgroundVideo: {
    flex: 1,
    height: 200
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: Colors.darkBlack,
    justifyContent: "center",
    backgroundColor: Colors.darkBlack,
    height: 200
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  }
})