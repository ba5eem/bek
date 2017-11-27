import React, { Component } from 'react';
import { connect } from 'react-redux';
import {mainBody} from '../Background/styles';
import Tablet from '../../components/Tablet.js';
import { GoogleLogin } from 'react-google-login';
import {loginUser} from '../../actions/login.js';


class LogInPage extends Component {
  constructor() {
    super();

    this.state={
      user: '',
      auth: false
    }
    this.googleLogin = this.googleLogin.bind(this);
    this.loginFailure = this.loginFailure.bind(this);
  }

  googleLogin(res){
    let name = res.profileObj.name;
    let pic = res.profileObj.imageUrl
    localStorage.setItem('pic',pic);
    this.props.loginUser(name);
    this.setState({auth: true})
    this.setState({user: name})
  }
  loginFailure(res){
    let name = res.profileObj.name;
    localStorage.clear();
    this.setState({auth: false})
  }






  render(){
    const user = this.state.user || localStorage.user;
    const auth = this.state.auth || localStorage.auth;

    return (
      <div style={mainBody} className="mainBody">
        <GoogleLogin
          clientId="366752664535-921iec03nsrtpbb4s8fdlpq8om608e12.apps.googleusercontent.com"
          buttonText="Google Login"
          onSuccess={this.googleLogin}
          onFailure={this.loginFailure}
        />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    users: state.users,
    user: localStorage.user,
    auth: localStorage.auth
  }
}

const ConnectedLogInPage = connect(
  mapStateToProps,
  {loginUser}
)(LogInPage)

export default ConnectedLogInPage;