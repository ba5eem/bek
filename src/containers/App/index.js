import React, { Component } from 'react';
import { connect } from 'react-redux';
import Iframe from 'react-iframe';
//import Pusher from 'pusher-js';
import NewShift from '../NewShift';
import Shift from '../Shift';
import ChatApp from '../Chat/ChatApp';
//import SendSMS from '../SendSMS/index';
// import {mainBody} from '../Background/styles';
//import Login from '../Login';

class App extends Component {
  constructor() {
    super();

    this.state={
      data: []
    }
  }

  render(){
    const path = "cohortuser19%40gmail.com";
    //const auth = this.state.auth || localStorage.auth;
    return (
      <div id="main-App-container">
        <NewShift />

        <div><Shift /></div>
        <div id="chat-app-div">
        <ChatApp/>
        </div>
        {/*auth
          ?<UsersListView/>
          :<Login/>
        */}
      </div>
    );
  }
}

// const container = {
//     display: "flex",
//     justifyContent:"center",
//     position: "relative"
//     }

// const mobile = {
//     maxHeight: "900px",
//     zIndex: "0"
//     }

// const appBody = {
//     backgroundColor: "white",
//     height: "552px",
//     width: "310px",
//     left: "286px",
//     zIndex: "1",
//     position: "absolute",
//     marginTop: "164px",
//     display:"flex-wrap",
//     justifyContent:"center"
//     }

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const ConnectedApp = connect(
  mapStateToProps
)(App)

export default ConnectedApp;



 // <div id="iframe-div">
 //          <Iframe url={`https://calendar.google.com/calendar/embed?src=${path}&ctz=Pacific/Honolulu`}
 //          width="700px"
 //          height="500px"
 //          frameborder="0"
 //          scrolling="no"
 //          position="absolute">
 //          </Iframe>
 //        </div>