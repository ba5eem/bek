import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { connect } from 'react-redux';
import Logout from '../Logout';
import { Link } from 'react-router-dom';
import {addUser} from '../../actions/users.js';
import { logoutUser } from '../../actions/logout';

class SideBar extends Component {
  constructor() {
    super();

    this.state = {
      user: ''
    };
  }




  render() {
    const auth = localStorage.isLoggedIn !== undefined ? localStorage.isLoggedIn : false;
    const admin = localStorage.admin !== undefined ? localStorage.admin : false;
    console.log('auth: ',auth);
    console.log('admin: ', admin);

    return(
      <div id="sidebar">
        <Menu
          width="200px">
        {auth ? <Link to="/">Home</Link> : <Link to="/home">Home</Link> }
      <div id="line"/>
        {/*WITH ADMIN ACCESS THEY CAN SEE USERS*/}
        {admin ? <Link to="/users">Users</Link> : null}

        {admin ? <div id="line"/> : null }
        {/*WITH AUTH/USER ACCESS THEY CAN SEE USERS*/}
        {auth ? <Link to="/shifts">Shifts</Link> :
        <Link to="/home">Learn More</Link>  }

      <div id="line"/>
        {/*WITH AUTH/USER/ADMIN ACCESS THEY CAN SEE PROFILE*/}
        {auth ? <Link to="/profile">Profile</Link> : null  }

        {auth ? <div id="line"/> : null }

        {auth ? <Link to="/logout"><Logout /></Link> :
        <Link to="/login">Login</Link> }
      </Menu>
      </div>
      )

    }


}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    status: state.logout
  }
}

const ConnectedSideBar = connect(
  mapStateToProps,
  {addUser,logoutUser}
)(SideBar)

export default ConnectedSideBar;