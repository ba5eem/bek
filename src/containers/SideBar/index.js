import React, { Component } from 'react';
import { scaleDown as Menu } from 'react-burger-menu';

class SideBar extends Component {
  constructor() {
    super();

    this.state = {
      showNav : false
    };
  }

  toggleNav(evt) {
    evt.preventDefault();
    this.setState({
      showNav : !this.state.showNav
    });
  }

  render() {
    if(localStorage.admin) {
      return(
        <Menu>
          <a id="messages"
          className="menu-item"
          href="/messages">
          Messages</a>

          <div id="line"/>

          <a id="management"
          className="menu-item"
          href="/role/admin">
          Management</a>
          <a id="staff"
          className="menu-item"
          href="/role/front">
          Staff</a>

          <div id="line"/>

          <a id="profile"
          className="menu-item"
          href="/profile">
          Profile</a>
          <a id="logout"
          className="menu-item"
          href="/logout">
          Logout</a>
        </Menu>
      )
    }else{
      return(
      <Menu>
        <a id="messages"
        className="menu-item"
        href="/messages">
        Messages</a>

        <div id="line"/>

        <a id="profile"
        className="menu-item"
        href="/profile">
        Profile</a>
        <a id="logout"
        className="menu-item"
        href="/logout">
        Logout</a>
      </Menu>
      )

    }
  }

}

export default SideBar;