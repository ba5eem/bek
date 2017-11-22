import React, { Component } from ‘react’;
//import { StyleSheet, Text, View } from ‘react-native’;
import { createRootNavigator } from “./config/authrouter”;
import { isSignedIn } from “./auth”;

export default class App extends Component {
 constructor(props) {
   super(props);

   this.state = {
     signedIn: false,
     checkedSignIn: false
   };
 }

 componentWillMount() {
   isSignedIn()
     .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
     .catch(err => alert(“Oops! Something broked”));
 }

 render() {
   const { checkedSignIn, signedIn } = this.state;
   // if we haven’t checked Storage for whether they’re signed in yet, don’t render anything
   if(!checkedSignIn){
     return null;
     // maybe put a loading symbol here??
   }

   const Layout = createRootNavigator(signedIn);
   return <Layout />;
   // layout will be our VIEWS
 }
}