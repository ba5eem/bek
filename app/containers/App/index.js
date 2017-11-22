import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Dashboard from '../Dashboard';
import Chat from '../Chat';
import Login from '../Login';
import Home from '../HomeTest';
//import { Router, Scene } from 'react-native-router-flux';
import ChatPageApp from '../ChatViewApp';






export default class App extends Component<{}> {
  render() {
    return (

          <View style={styles.container}>
            <Login />
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


AppRegistry.registerComponent('App', () =>  App);