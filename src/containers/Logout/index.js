import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect} from 'react-redux';
import { logoutUser } from '../../actions/logout';

class Logout extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoggedOut: false,
      redirect: false
    }
  }


  handleLogout(event){
    localStorage.clear();
    this.props.logoutUser();
    this.setState({redirect: true})
  }

  render(){
    const isLoggedIn = localStorage.isLoggedIn;
    if(this.state.redirect){ return (<Redirect to='/login'/>)}

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