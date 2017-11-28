import firebase from 'firebase';
require('dotenv').config();
var config = {
  apiKey: process.env.TWILIO_API_KEY,
  authDomain: "c19bek.firebaseapp.com",
  databaseURL: "https://c19bek.firebaseio.com",
  storageBucket: "c19bek.appspot.com",
  messagingSenderId: "366752664535"
};
var fire = firebase.initializeApp(config);
export default fire;