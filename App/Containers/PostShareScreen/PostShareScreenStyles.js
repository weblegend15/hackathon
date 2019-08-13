import { StyleSheet, Dimensions } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes'
import { position } from 'polished'
import Colors from '../../Themes/Colors'

const width = Dimensions.get('window').width

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  postInfo: {
    flex: 1,
    marginTop: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin,
    borderBottomWidth: 0.4,
    borderColor: 'grey',
    flexDirection: 'row',
    maxHeight: 65
  },
  inputTitle: {
    height: 50,
    paddingLeft: Metrics.baseMargin,
    paddingRight: Metrics.baseMargin,
    width: width - 150
  },
  backgroundVideo: {
    minWidth: 100,
    height: 50
  },
  backIcon: {
    marginLeft: 10
  },
  shareButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  shareIcon: {
    marginTop: Metrics.baseMargin,
    color: Colors.facebook
  }
})