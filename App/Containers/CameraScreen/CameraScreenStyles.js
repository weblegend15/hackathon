import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes'
import { position } from 'polished';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: 'black',
    padding: 5,
    paddingHorizontal: 10,
    alignSelf: 'center',
    margin: 60,
  },
  captureButton: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})