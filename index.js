import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './app/containers/App';
import store from './redux';
 
export default class BEK extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
 
AppRegistry.registerComponent('bek', () => BEK);