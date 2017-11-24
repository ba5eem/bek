import React, { Component } from 'react';
import { connect } from 'react-redux';
import {mainBody} from '../Background/styles';
import { createStore } from 'redux'
import Mac from '../../components/Mac.js';
import MacDashboard from '../../components/MacDashboard.js';
import {loginUser} from '../../actions/login.js';
import login from '../../reducers/login.js';
import Login from '../Login';

const store = createStore(loginUser);


class MacView extends Component {
  constructor() {
    super();
    
    this.state={ 
      user: localStorage.user,
      auth: localStorage.auth
    }
  }






  render(){
    const user = this.state.user;
    const auth = this.state.auth;
    return (

      <div style={mainBody} className="mainBody">

        {/*MAC VIEW*/}
          <div style={container} className="mobile">
            <img style={mac} src="http://bit.ly/2A7UiUC" alt="phone"/>
            <div style={macAppBody}>

              {!auth ? <Mac /> : null }
              {auth ? <MacDashboard user={user}/> : null }

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
  {loginUser}
)(MacView)

export default ConnectedMacView;