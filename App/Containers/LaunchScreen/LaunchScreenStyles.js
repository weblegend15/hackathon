import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes'
import { position } from 'polished';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  videosContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  backgroundVideo: {
    flex: 1
  },
  footer: {
    flex: 0.1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
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
