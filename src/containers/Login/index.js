import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import {addUser} from '../../actions/users.js';


class Login extends Component {
  constructor(props) {
    super(props);

    //const {dispatch} = props;

    this.state={
      user: '',
      auth: false,
      isLoggedIn: false
    }
    this.googleLogin = this.googleLogin.bind(this);
    this.loginFailure = this.loginFailure.bind(this);
  }

  googleLogin(res){
    this.props.addUser(res.profileObj);
  }
  loginFailure(res){
    localStorage.clear();
    this.setState({auth: false})
    this.setState({isLoggedIn: false})
  }

  render(){
    const auth = this.props.users;
    const isLoggedIn = auth.isLoggedIn;
    if(isLoggedIn){ return (<Redirect to='/home'/>)}

    return (
        <div id="login-container">
          <div className="login-welcome">-- W E L C O M E --</div>
          <div className="google-icon"></div>
          <div className="login-welcome">Please login with your GOOGLE account</div>

          <GoogleLogin
            clientId="366752664535-921iec03nsrtpbb4s8fdlpq8om608e12.apps.googleusercontent.com"
            className="google-login"
            buttonText="Google Login"
            onSuccess={this.googleLogin}
            onFailure={this.loginFailure}/>

        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const ConnectedLogin = connect(
  mapStateToProps,
  {addUser}
)(Login)

export default ConnectedLogin;