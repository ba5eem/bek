/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Dashboard from '../Dashboard';
import { Provider } from 'react-redux';
import reducers from '../../reducers';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import Login from '../Login';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

function configureStore(initialState){
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware
    ),
  );
  return createStore(reducers, initialState, enhancer);
}

const store = configureStore({});

export default class app extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
      <View style={styles.container}>
        {/*<Text style={styles.welcome}>
          Welcome to BEK!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>*/}
        <Dashboard/>
      </View>
      </Provider>
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


AppRegistry.registerComponent('app', () =>  app);