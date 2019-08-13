import React from 'react'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import LaunchScreen from '../Containers/LaunchScreen'
import CameraScreen from '../Containers/CameraScreen'
import FriendsScreen from '../Containers/FriendsScreen'
import styles from './Styles/NavigationStyles'
import Title from '../Constants/variables'

// Manifest of possible screens

const LaunchNav = createStackNavigator({
  Profile: {
    screen: LaunchScreen,
    navigationOptions: ({ navigation }) => ({
      title: `Hackathon`,
      headerStyle: styles.header
    }),
  }
});

const CameraNav = createStackNavigator({
  Profile: {
    screen: CameraScreen
  }
});

const FriendsNav = createStackNavigator({
  Profile: {
    screen: FriendsScreen
  }
});

const PrimaryNav = createBottomTabNavigator({
  LaunchScreen: { screen: LaunchNav },
  CameraScreen: {
    screen: CameraNav,
    navigationOptions:{ tabBarVisible: false }
  },
  FriendsScreen: { screen: FriendsNav }
}, {
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header,
  },
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
    },
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state
      let iconName
      let tabBarVisible

      switch (routeName) {
        case 'LaunchScreen':
          iconName = 'home'
          break;
        case 'CameraScreen':
          iconName = `${focused ? 'plus-square' : 'plus-square-o'}`
          break;
        case 'FriendsScreen':
          iconName = `${focused ? 'user' : 'user-o'}`
          break;
        default:
          break;
      }

      return <Icon name={iconName} size={25} backgroundColor={tintColor} />
    },
  }),
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'white',
  },
})

export default createAppContainer(PrimaryNav)
