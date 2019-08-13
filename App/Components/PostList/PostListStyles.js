import { StyleSheet, Dimensions } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes'
import { position } from 'polished'
import Colors from '../../Themes/Colors'

const width = Dimensions.get('window').width

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  postItem: {
    borderBottomColor: 'grey',
    borderBottomWidth: 0.2,
    paddingTop: Metrics.baseMargin,
    paddingBottom: Metrics.baseMargin
  },
  backgroundVideo: {
    flex: 1,
    height: 500
  },
  emptyPost: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  alert: {
    marginTop: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin
  },
  videosContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  userInfo: {
    flex: 1,
    margin: Metrics.baseMargin,
    flexDirection: 'row'
  },
  avatar: {
    marginRight: 10
  },
  comments: {
    margin: Metrics.baseMargin
  },
  title: {
    fontSize: 18
  },
  content: {
    fontSize: 14
  }
})