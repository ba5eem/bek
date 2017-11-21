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

const ProfileDetails = ({users}) => {
  return(
    <View style={styles.container}>
      <Image
        style={styles.photo}
        source = {{uri: 'https://pbs.twimg.com/profile_images/690367426794516480/8hM2aY52_400x400.png'}}/>
      <View style={styles.details}>
        <Text style={styles.text}>Name: {users.username} </Text>
        <Text style={styles.text}>Google Id: {users.googleid}</Text>
        <Text style={styles.text}>Phone Number: {users.phonenumber} </Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width:415,
    height: undefined,
    flex: 1/2,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
//    flexWrap: 'nowrap',
    backgroundColor: 'skyblue',
    flexWrap: 'nowrap',
  },
  photo: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
    aspectRatio: 1.5,
    marginTop:10,
    borderRadius: 40
  },
  details: {
    flex: 1,
    width: undefined,
    height: undefined,
    marginTop:15
  },
  text: {
    fontSize:20
  }
})


//The methods built in are boiler plater setup - they may not be neccessary or applicable to this containers - please remove/add as needed. - they are only here to help with startup of project
export default ProfileDetails;

