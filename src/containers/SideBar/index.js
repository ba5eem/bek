import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { connect } from 'react-redux';
import Logout from '../Logout';
import { Link } from 'react-router-dom';
import {addUser} from '../../actions/users.js';
import { logoutUser } from '../../actions/logout';
import NonUserSideBar from '../../components/NonUserSideBar.components.js';
import UserSideBar from '../../components/UserSideBar.components.js';
import AdminSideBar from '../../components/AdminSideBar.components.js';

class SideBar extends Component {
  constructor() {
    super();

    this.state = {
      user: ''
    };
  }

  render() {
    const checkAuth = localStorage.isLoggedIn !== undefined ? localStorage.isLoggedIn : false;
    const checkAdmin = localStorage.admin !== undefined ? localStorage.admin : false;
    const auth = checkAuth === "true"
    const admin = checkAdmin === "true"
    console.log('auth: ',auth);
    console.log('admin: ', admin);

    return(
      <div id="sidebar">

        {!auth ? <NonUserSideBar /> : null }
        {auth ? <UserSideBar /> : null }
        {admin ? <AdminSideBar /> : null }

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