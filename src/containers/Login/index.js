import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
// import MobileView from '../MobileView';
// import TabletView from '../TabletView';
// import MacView from '../MacView';


class Login extends Component {
  constructor(props) {
    super(props);

    const {dispatch} = props;

    this.state={
      data: [],
      isLoggedIn: false
    }
    this.googleLogin = this.googleLogin.bind(this);
    this.loginFailure = this.loginFailure.bind(this);
  }

  googleLogin(res){
    console.log(res);
    let name = res.profileObj.name;
    console.log(res.profileObj);
console.log('localStorage from Login ---->', localStorage)
    this.setState({isLoggedIn: true})
  }
  loginFailure(res){
    let name = res.profileObj.name;
    localStorage.clear();
    console.log(res.profileObj);

    this.setState({isLoggedIn: false})
  }

  render(){
    return (
        <div className="Login">
          <GoogleLogin
            clientId="366752664535-921iec03nsrtpbb4s8fdlpq8om608e12.apps.googleusercontent.com"
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
  mapStateToProps
)(Login)

export default ConnectedLogin;