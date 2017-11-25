import React, { Component } from 'react';
import { connect } from 'react-redux';
import {mainBody} from '../Background/styles';
import { Redirect, Link } from 'react-router-dom';
import Mobile from '../../components/Mobile.js';
import { GoogleLogin } from 'react-google-login';
import {addUser} from '../../actions/users.js';
import MobileDashboard from '../../components/MobileDashboard.js';



class MobileView extends Component {
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
    console.log(res.profileObj);
    this.props.addUser(res.profileObj);
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
    const pic = this.state.pic || localStorage.pic;
    return (

      <div style={mainBody} className="mainBody">

        {/*MOBILE VIEW*/}
          <div style={container} className="mobile">
            <img style={mobile} src="http://bit.ly/2jQCkSn" alt="phone"/>
            <div style={appBody}>
              {!auth ? <Mobile /> : null }
              {!auth ? <GoogleLogin
                clientId="366752664535-921iec03nsrtpbb4s8fdlpq8om608e12.apps.googleusercontent.com"
                buttonText="Google Login"
                onSuccess={this.googleLogin}
                onFailure={this.loginFailure}/> : null}
              {auth ? <MobileDashboard user={user}/> : null }
            </div>
          </div>
        {/*MOBILE VIEW*/}
      </div>

    );
  }
}

const container = {
    display: "flex",
    justifyContent:"center",
    position: "relative"
    }


const mobile = {
    maxHeight: "900px",
    zIndex: "0"
    }

const appBody = {
    backgroundColor: "white",
    height: "552px",
    width: "311px",
    left: "285px",
    zIndex: "1",
    position: "absolute",
    marginTop: "164px",
    display:"flex-wrap",
    justifyContent:"center",
    textAlign: "center"
    }

const mapStateToProps = (state) => {
  return {
    users: state.users,
    user: localStorage.user,
    auth: localStorage.auth
  }
}

const ConnectedMobileView = connect(
  mapStateToProps,
  {addUser}
)(MobileView)

export default ConnectedMobileView;