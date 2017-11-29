import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect} from 'react-redux';
import { logoutUser } from '../../actions/logout';

class Logout extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoggedOut: false
    }
  }


  handleLogout(event){
    console.log("hi")
    localStorage.clear();
    this.props.logoutUser();
    console.log("hi2")
  }

  render(){
    const isLoggedIn = localStorage.isLoggedIn;
    if(!isLoggedIn){ return (<Redirect to='/'/>)}

    return (
        <div id="logout-form">
          <form onClick={this.handleLogout.bind(this)}>
            <div>Log Out</div>
          </form>
        </div>
      )
    }
}

const ConnectedLogout = connect(
  null,
  {logoutUser}
)(Logout)

export default ConnectedLogout;