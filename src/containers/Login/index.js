import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';




class Login extends Component {
  constructor() {
    super();
    
    this.state={ 
      data: []
    }
    this.googleLogin = this.googleLogin.bind(this);
    this.loginFailure = this.loginFailure.bind(this);
  }

  googleLogin(res){
    let name = res.profileObj.name;
    localStorage.setItem('user',name);
    console.log(res.profileObj);
  }
  loginFailure(res){
    let name = res.profileObj.name;
    console.log(res.profileObj);
  }










  render(){
    return (

        <div className="Login">
          <GoogleLogin
            img src="http://bit.ly/2yQYURG"
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