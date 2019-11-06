import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import ReduxNavigation from '../../Navigation/ReduxNavigation'
import { connect } from 'react-redux'
import StartupActions from '../../Redux/StartupRedux'

// Styles
import styles from './RootContainerStyles'


const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
class RootContainer extends Component {
  componentDidMount () {
    this.props.startup()
  }

  render () {
    return (
      <View style={styles.applicationView}>
        <MyStatusBar backgroundColor="#121212" barStyle="light-content" />
        <ReduxNavigation />
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapDispatchToProps)(RootContainer)
