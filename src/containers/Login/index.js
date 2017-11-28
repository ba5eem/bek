import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import {addUser} from '../../actions/users.js';


class Login extends Component {
  constructor(props) {
    super(props);

    const {dispatch} = props;

    this.state={
      user: '',
      auth: false,
      isLoggedIn: false
    }
    this.googleLogin = this.googleLogin.bind(this);
    this.loginFailure = this.loginFailure.bind(this);
  }

  googleLogin(res){
    let name = res.profileObj.name;
    let pic = res.profileObj.imageUrl
    localStorage.setItem('pic',pic);
    console.log('res from macview--->', res)
    this.props.addUser(res.profileObj);
    this.setState({auth: true})
    this.setState({user: name})
    this.setState({isLoggedIn: true})
    this.props.history.pushState(null, '/');

  }
  loginFailure(res){
    let name = res.profileObj.name;
    localStorage.clear();
    //console.log(res.profileObj);
    this.setState({auth: false})
    this.setState({isLoggedIn: false})
  }

  render(){
    const user = this.state.user || localStorage.user;
    const auth = this.state.auth || localStorage.auth;
    const pic = this.state.pic || localStorage.pic;

    return (
        <div id="login-container">
          <div className="google-icon"></div>
          <div className="login-welcome">Please log in to your GOOGLE account</div>

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