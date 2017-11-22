//first screen seen when logged in
import React, { Component } from ‘react’;
import { ScrollView, Text, Button, Image, StyleSheet } from ‘react-native’;

export default class FirstScreen extends Component {
 static navigationOptions = {
   tabBarIcon: ({tintColor}) => (

     )
 }
 render () {
   return <ScrollView style={styles.view}>

   <Text style={{fontSize: 30}}>
        yoooo
       </Text>
     </ScrollView>
 }
}

const styles = StyleSheet.create({
 view: {
   flex: 1,
   marginTop: 200,
 },
 logo: {
   justifyContent: ‘center’,
 }
});