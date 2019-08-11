import { StyleSheet, Dimensions } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes'
import { position } from 'polished';
import Colors from '../../Themes/Colors'

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  contentContainer: {
    paddingVertical: 20
  },
  videosContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  backgroundVideo: {
    flex: 1,
    height: 250
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: width,
    backgroundColor: Colors.ricePaper,
    borderTopColor: Colors.frost,
    borderTopWidth: 1,
    height: 50
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  }
})
