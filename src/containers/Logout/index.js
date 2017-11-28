import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect} from 'react-redux';
import { logoutUser } from '../../actions/users';

class Logout extends Component {
  constructor(props){
    super(props);

    this.state = {
      redirect: false
    }
  }


  handleLogout(event){
    localStorage.clear();
    this.setState({redirect: true});
    this.props.logoutUser();

  }

  render(){
    if(this.state.redirect){
      return ( <Redirect to='/login' /> )
    }else{
    return (
        <div id="logout-form">
          <form onClick={this.handleLogout.bind(this)}>
            <div>Log Out</div>
            {/*<input type="submit" className="button" value="Logout"/>*/}
          </form>
        </div>
      )
    }
  }
}

const mapStatetoProps = (state) => {
  return {
    user : state.login

  }
}

const ConnectedLogout = connect(
  mapStatetoProps,
  {logoutUser}
)(Logout)

export default ConnectedLogout;