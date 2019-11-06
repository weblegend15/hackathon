import {StyleSheet, Platform, StatusBar} from 'react-native'
import {Fonts, Metrics, Colors} from '../../Themes'

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 25 : StatusBar.currentHeight;

export default StyleSheet.create({
  applicationView: {
    flex: 1
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.background
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: Fonts.type.base,
    margin: Metrics.baseMargin
  },
  myImage: {
    width: 200,
    height: 200,
    alignSelf: 'center'
  }
})
