import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes/'

export default StyleSheet.create({
  header: {
    borderTopColor: Colors.snow,
    borderTopWidth: 0.3,
    borderBottomWidth: 0,
    color: Colors.snow,
    backgroundColor: Colors.darkBlack,
    height: 30,
    marginBottom: 15
  },
  headerTitleStyle: {
    fontSize: 28
  },
  navbarLeftIcon: {
    color: Colors.snow,
    marginLeft: 20
  },
  navbarRightIcon :{
    color: Colors.snow,
    marginRight: 20
  },
  bottomNavbarFontStyle: {
    color: Colors.snow
  },
  bottomNavbar :{
    borderTopColor: Colors.snow,
    borderTopWidth: 0.3,
    backgroundColor: Colors.darkBlack,
  }
})
