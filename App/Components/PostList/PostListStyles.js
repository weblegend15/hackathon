import { StyleSheet, Dimensions } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes'
import { position } from 'polished'
import Colors from '../../Themes/Colors'

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  backgroundVideo: {
    flex: 1,
    height: 200
  },
  videosContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  userInfo: {
    flex: 1,
    margin: Metrics.baseMargin,
    flexDirection: 'row'
  },
  avatar: {
    marginRight: 20
  },
  comments: {
    margin: Metrics.baseMargin,
  },
  title: {
    fontSize: 18
  },
  content: {
    fontSize: 14
  }
})