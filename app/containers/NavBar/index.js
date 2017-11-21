import React, { Component } from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import t from 'tcomb-form-native';

//react-native import has been commented out - please un-comment once react-native has been installed. Link and Connect may not be neccessary moving forward with react-native

//Using react-native - these boiler plates may be un-neccessary - please remove/change/add as you see fit:



class Navbar extends Component {

  render() {
    return (
          <View style={styles.container}>
              <View style={styles.halfHeight} />
              <View style={styles.quarterHeight} />
              <View style={[styles.quarterHeight, {backgroundColor: '#CCC'}]} />
          </View>
      )
  }
}


export default Navbar;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    halfHeight: {
        flex: .5,
        backgroundColor: '#FF3366'
    },
    quarterHeight: {
        flex: .25,
        backgroundColor: '#000'
    }
});
