import React, {Component} from 'react'
import {
  Text,
  View,
} from 'react-native'

export default class Login extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>
          The current scene is titled {this.props.title}
        </Text>
        <Text onPress={this.props.loginWithDelay}>
          Attempt Login
        </Text>
        {this.props.onLogging && <Text>Logging In</Text>}
      </View>
    )
  }
}