import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Chat from '../Chat';
import Home from '../HomeTest';
import { Router, Scene } from 'react-native-router-flux';


export default class chatPage extends Component<{}> {
  render() {
    return (
        <Router>
          <Scene key='root' style={{paddingTop: Platform.OS === 'ios' ? 64 : 54}}>
          <Scene key='home' title='Home' component={Home}/>
          <Scene key='chat' title='Chat' component={Chat}/>
        </Scene>
        </Router>
    );
  }
}

