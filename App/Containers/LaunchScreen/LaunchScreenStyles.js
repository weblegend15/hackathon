import { StyleSheet, Dimensions } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes'
import { position } from 'polished'
import Colors from '../../Themes/Colors'

const width = Dimensions.get('window').width

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  hero: {
    fontSize: 24,
    marginTop: 30,
    marginBottom: 30
  },
  shortProfile: {
    backgroundColor: Colors.darkBlack,
    paddingBottom: 10,
    color: Colors.snow,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  photo: {
    paddingTop: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  proName: {
    color: 'white',
    marginLeft: 10
  },
  centered: {
    alignItems: 'center',
    marginTop: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin
  },
  carouselView: {
    backgroundColor: Colors.black,
  },
  settings: {
    color: 'white'
  },
  effect: {
    backgroundColor: Colors.darkBlack,
    marginTop: 200,
    color: Colors.snow,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sign: {
    marginLeft: 10,
    marginRight: 10,
    color: '#444444'
  },
  signs: {
    paddingTop: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  timer :{
    color: '#444444',
    marginRight: 10
  },
  likes: {
    color: Colors.snow,
    fontSize: 18,
    marginTop: 20,
    marginLeft: 20
  }
})
