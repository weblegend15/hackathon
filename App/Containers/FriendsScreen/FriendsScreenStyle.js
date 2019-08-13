import { StyleSheet, Dimensions } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes'
import Colors from '../../Themes/Colors'

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  contentTitle: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 30,
    fontWeight: '500'
  },
  friendCard: {
    marginTop: 100,
    margin: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width - 120,
    height: 250,
    borderWidth: 1,
    borderColor: Colors.frost,
    borderRadius: 10
  },
  friendName: {
    paddingTop: Metrics.baseMargin,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  friendStory: {
    marginTop: Metrics.baseMargin,
    marginLeft: Metrics.baseMargin,
    marginRight: Metrics.baseMargin,
    textAlign: 'center',
    fontWeight: '200',
    color: 'grey'
  },
  name: {
    fontWeight: 'bold',
    textAlign: 'center'
  },
  story: {
    fontWeight: '200',
    color: 'grey',
    textAlign: 'center'
  }
})