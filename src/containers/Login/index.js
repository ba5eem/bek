import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import MobileView from '../MobileView';
import TabletView from '../TabletView';
import MacView from '../MacView';
import {loginUser} from '../../actions/login.js';



class Login extends Component {
  constructor(props) {
    super(props);

    const {dispatch} = props;
    
    this.state={ 
      data: [],
      test: 'baseem'
    }
    this.googleLogin = this.googleLogin.bind(this);
    this.loginFailure = this.loginFailure.bind(this);
  }

  googleLogin(res){
    let name = res.profileObj.name;
    localStorage.setItem('user',name);
    localStorage.setItem('auth','true');
    console.log(res.profileObj);
    this.props.loginUser(name);
  }
  loginFailure(res){
    let name = res.profileObj.name;
    console.log(res.profileObj);
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
  mapStateToProps,
  {loginUser}
)(Login)

export default ConnectedLogin;