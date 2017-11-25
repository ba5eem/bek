import React, { Component } from 'react';
import { connect } from 'react-redux';
import {mainBody} from '../Background/styles';
import Tablet from '../../components/Tablet.js';
import { GoogleLogin } from 'react-google-login';
import {addUser} from '../../actions/users.js';
import TabletDashboard from '../../components/TabletDashboard.js';



class TabletView extends Component {
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
    this.props.addUser(name);
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

        {/*TABLET VIEW*/}
          <div style={container} className="mobile">
            <img style={tablet} src="http://bit.ly/2ziG0PK" alt="phone"/>
            <div style={tabletAppBody} >
              {!auth ? <Tablet /> : null }
              {!auth ? <GoogleLogin
                clientId="366752664535-921iec03nsrtpbb4s8fdlpq8om608e12.apps.googleusercontent.com"
                buttonText="Google Login"
                onSuccess={this.googleLogin}
                onFailure={this.loginFailure}/> : null}
              {auth ? <TabletDashboard user={user}/> : null }
            </div>
          </div>
        {/*TABLET VIEW*/}
      </div>

    );
  }
}

const container = {
    display: "flex",
    justifyContent:"center",
    position: "relative"
    }


const tablet = {
    width: "800px",
    zIndex: "0"
    }


const tabletAppBody = {
    backgroundColor: "lightgrey",
    height: "602px",
    width: "515px",
    left: "142px",
    zIndex: "1",
    position: "absolute",
    marginTop: "149px",
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

const ConnectedTabletView = connect(
  mapStateToProps,
  {addUser}
)(TabletView)

export default ConnectedTabletView;