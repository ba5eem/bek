import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../../actions/login';
import { filterAll } from '../../lib/Filters';
// import {
//   Button,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableHighlight,
//   View
// } from 'react-native';

//react-native import has been commented out - please un-comment once react-native has been installed. Link and Connect may not be neccessary moving forward with react-native

//Using react-native - these boiler plates may be un-neccessary - please remove/change/add as you see fit: 

class Login extends Component {
  constructor(){
    super();

    this.state = {
      shifts: ''
    }
  }


  handleSubmit(){
    //this.props.loginUser();
  }


  render(){

    return(
       <div>Login Container</div>
    )
  }
}



//The methods built in are boiler plater setup - they may not be neccessary or applicable to this containers - please remove/add as needed. - they are only here to help with startup of project


const mapStateToProps = (state) => {
  return{
    shifts: state.shifts
  }
}

const ConnectedLogin = connect(
  mapStateToProps,
  {loginUser}
)(Login)

export default ConnectedLogin;