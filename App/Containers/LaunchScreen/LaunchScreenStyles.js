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
  backgroundVideo: {
    flex: 1,
    height: 200
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center',
    marginTop: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin
  }
})
