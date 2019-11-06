import React from 'react'
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import LaunchScreen from '../Containers/LaunchScreen'
import CameraScreen from '../Containers/CameraScreen'
import FriendsScreen from '../Containers/FriendsScreen'
import FriendPostsScreen from '../Containers/FriendPostsScreen'
import PostShareScreen from '../Containers/PostShareScreen'
import styles from './Styles/NavigationStyles'
import Title from '../Constants/variables'

// Manifest of possible screens

const LaunchNav = createStackNavigator({
  Profile: {
    screen: LaunchScreen,
    navigationOptions: ({ navigation }) => ({
      title: `Real`,
      headerTintColor: 'white',
      drawerLabel: 'Profile',
      headerStyle: styles.header,
      headerTitleStyle: styles.headerTitleStyle,
      headerLeft: (
        <Icon name={'plus-circle'} size={25} style={styles.navbarLeftIcon} />
      ),
      headerRight: (
        <Icon name={'comment-o'} size={25} style={styles.navbarRightIcon} />
      )
    }),
  }
})

const CameraNav = createStackNavigator({
  Camera: {
    screen: CameraScreen
  },
  PostShare: {
    screen: PostShareScreen
  }}, {
    initialRouteName: 'Camera'
  }
)

const FriendsNav = createStackNavigator({
  Profile: {
    screen: FriendsScreen
  },
  PostList: {
    screen: FriendPostsScreen
  }}, {
    initialRouteName: 'Profile'
  }
)

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
      labelStyle: styles.bottomNavbarFontStyle,
      style: styles.bottomNavbar
    },
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state
      let iconName
      let tabBarVisible

      switch (routeName) {
        case 'LaunchScreen':
          iconName = 'home'
          break
        case 'CameraScreen':
          iconName = `${focused ? 'plus-square' : 'plus-square-o'}`
          break
        case 'FriendsScreen':
          iconName = `${focused ? 'user' : 'user-o'}`
          break
        default:
          break
      }

      return <Icon
              name={iconName}
              size={25}
              backgroundColor={tintColor}
              style={styles.bottomNavbarFontStyle} />
    },
  }),
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'white',
  },
})

export default PrimaryNav
