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
    localStorage.clear();
    this.props.logoutUser();
  }

  render(){
    const auth = this.props.status;
    const isLoggedOut = auth.isLoggedOut;
    if(isLoggedOut){ return (<Redirect to='/home'/>)}

    return (
        <div id="logout-form">
          <form onClick={this.handleLogout.bind(this)}>
            <div>Log Out</div>
          </form>
        </div>
      )
    }
}

const mapStatetoProps = (state) => {
  return {
    status : state.logout

  }
}

const ConnectedLogout = connect(
  mapStatetoProps,
  {logoutUser}
)(Logout)

export default ConnectedLogout;