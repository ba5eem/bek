import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

const ProfileDetails = () => {
  return(
    <View>
      <View style={styles.photo}>
        <Image
          style = {{width: 100, height: 100}}
          source = {{uri: 'https://pbs.twimg.com/profile_images/690367426794516480/8hM2aY52_400x400.png'}}/>
      </View>
      <View>
        <Text>Name: What? </Text>
        <Text>Email: </Text>
        <Text>Phone Number: </Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  photo: {
    width: 110,
    height: 100
  },
  details: {
    width: 150,
    height: 100
  }
})


//The methods built in are boiler plater setup - they may not be neccessary or applicable to this containers - please remove/add as needed. - they are only here to help with startup of project
export default ProfileDetails;

