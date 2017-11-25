import React, { Component } from 'react';
import { connect } from 'react-redux';
import {mainBody} from '../Background/styles';
import { createStore } from 'redux'
import Mac from '../../components/Mac.js';
import MacDashboard from '../../components/MacDashboard.js';
import {addUser} from '../../actions/users.js';
import login from '../../reducers/login.js';
import Login from '../Login';
import { GoogleLogin } from 'react-google-login';
import ChatApp from '../Chat/ChatApp';



class MacView extends Component {
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
    console.log('res from macview--->', res)
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

        {/*MAC VIEW*/}
          <div style={container} className="mobile">
            <img style={mac} src="http://bit.ly/2A7UiUC" alt="phone"/>
            <div style={macAppBody}>

              {!auth ? <Mac /> : <MacDashboard user={user}/> }
              {!auth ? <GoogleLogin
                clientId="366752664535-921iec03nsrtpbb4s8fdlpq8om608e12.apps.googleusercontent.com"
                buttonText="Google Login"
                onSuccess={this.googleLogin}
                onFailure={this.loginFailure}/> : null}



            </div>

          </div>
        {/*MAC VIEW*/}
      </div>

    );
  }
}

const container = {
    display: "flex",
    justifyContent:"center",
    position: "relative"
    }


const mac = {
    marginTop: "100px",
    width: "900px",
    height:"600px",
    zIndex: "0"
    }

const macAppBody = {
    backgroundColor: "white",
    height: "467px",
    width: "681px",
    left: "110px",
    zIndex: "1",
    position: "absolute",
    marginTop: "138px",
    display:"flex-wrap",
    justifyContent:"center",
    textAlign:"center"
    }

const mapStateToProps = (state) => {
  return {
    users: state.users,
    user: state.user
  }
}





const ConnectedMacView = connect(
  mapStateToProps,
  {addUser}
)(MacView)

export default ConnectedMacView;