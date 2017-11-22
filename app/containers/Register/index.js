// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { addUser } from '../../actions/register';
// import { filterAll } from '../../lib/Filters';
// // import {
// //   Button,
// //   ScrollView,
// //   StyleSheet,
// //   Text,
// //   TextInput,
// //   TouchableHighlight,
// //   View
// // } from 'react-native';

// //react-native import has been commented out - please un-comment once react-native has been installed. Link and Connect may not be neccessary moving forward with react-native

// //Using react-native - these boiler plates may be un-neccessary - please remove/change/add as you see fit:

// class Register extends Component {
//   constructor(){
//     super();

//     this.state = {
//       user: ''
//     }
//   }


//   handleSubmit(){
//     //this.props.addUser();
//   }


//   render(){

//     return(
//        <div>Register Container</div>
//     )
//   }
// }



// //The methods built in are boiler plater setup - they may not be neccessary or applicable to this containers - please remove/add as needed. - they are only here to help with startup of project


// const mapStateToProps = (state) => {
//   return{
//     user: state.user //ensure no personal info is returned !!
//   }
// }

// const ConnectedRegister = connect(
//   mapStateToProps,
//   {addUser}
// )(Register)

// export default ConnectedRegister;