import React, { Component } from 'react';
import { scaleDown as Menu } from 'react-burger-menu';
import Logout from '../Logout';
import { Link } from 'react-router-dom';
class SideBar extends Component {
  constructor() {
    super();

    this.state = {
      showNav : false,
      auth: false
    };
  }

  toggleNav(evt) {
    evt.preventDefault();
    this.setState({
      showNav : !this.state.showNav
    });
  }

  render() {
    //const auth = this.state.auth || localStorage.auth;
    return(
      <div>
      {/*!auth?
        null:*/
        <Menu>

        <div id="line"/>

        <Link to="/">
        Home</Link>
        <Link to="/chat">
        Chatroom</Link>
        <Link to="/users">
        Users</Link>
        <Link to="/logout">
        <Logout/></Link>

        <div id="line"/>
      </Menu>
    }
      </div>
      )

    }


}

export default SideBar;