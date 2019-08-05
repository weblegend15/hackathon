import { createStackNavigator, createAppContainer } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import styles from './Styles/NavigationStyles'
import Title from '../Constants/variables';

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  LaunchScreen: { screen: LaunchScreen }
}, {
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
