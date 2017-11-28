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
      isLoggedIn: localStorage.isLoggedIn,
      admin: localStorage.admin
    };
  }




  render() {
    const isLoggedIn = this.props.users.isLoggedIn;
    const access = this.props.users.admin;
    const auth = isLoggedIn !== undefined ? true : false;
    const admin = access !== undefined ? true : false;

    return(
      <div id="sidebar">
        <Menu
          width="200px"
          noOverlay>
        <Link to="/">Home</Link>
      <div id="line"/>
        {/*WITH ADMIN ACCESS THEY CAN SEE USERS*/}
        {admin ? <Link to="/users">Users</Link> : null  }

        {admin ? <div id="line"/> : null }
        {/*WITH AUTH/USER ACCESS THEY CAN SEE USERS*/}
        {auth ? <Link to="/shifts">Shifts</Link> : 
        <Link to="/home">Learn More</Link>  }

      <div id="line"/>
        {/*WITH AUTH/USER/ADMIN ACCESS THEY CAN SEE PROFILE*/}
        {auth ? <Link to="/profile">Profile</Link> : null  }

        {auth ? <div id="line"/> : null }

        {auth ? <Link to="/logout">Logout</Link> : 
        <Link to="/login">Login</Link> }

      <div id="line"/>

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