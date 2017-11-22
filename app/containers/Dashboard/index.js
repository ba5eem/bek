import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadUsers } from '../../actions/users';
import { filterAll } from '../../lib/Filters';
import {
  AppRegistry,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import ProfileDetails from '../../component/ProfileDetails';
//import {loadUser} from '../../networking/server';
//react-native import has been commented out - please un-comment once react-native has been installed. Link and Connect may not be neccessary moving forward with react-native

//Using react-native - these boiler plates may be un-neccessary - please remove/change/add as you see fit:



class Dashboard extends Component {
  constructor(){
    super();

    this.state = {
      user: ''
    }
  }


 componentDidMount(){

  }




  render(){

    return(
       <View>
        <ProfileDetails
          users={this.props.users}/>
       </View>
    )
  }
}

INSERT into "shifts" VALUES (DEFAULT, '08:00:00', '12:00:00', '2017-11-22', 'details text here', '1', DEFAULT, '2017-11-22 00:00:57', '2017-11-22 00:00:57');



//The methods built in are boiler plater setup - they may not be neccessary or applicable to this containers - please remove/add as needed. - they are only here to help with startup of project


const mapStateToProps = (state) => {
  return{
    users: state.users
  }
}

const ConnectedDashboard = connect(
  mapStateToProps,
  {loadUsers}
)(Dashboard)

export default ConnectedDashboard;

AppRegistry.registerComponent('Dashboard', () =>  Dashboard);