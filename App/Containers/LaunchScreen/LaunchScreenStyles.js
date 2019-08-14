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
  centered: {
    alignItems: 'center',
    marginTop: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin
  }
})
