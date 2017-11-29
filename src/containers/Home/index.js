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

class Home extends Component {
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

        <div id="iframe-div">
        <Iframe url={`https://calendar.google.com/calendar/embed?src=${path}&ctz=Pacific/Honolulu`}
          width="650px"
          height="500px"
          frameborder="0"
          scrolling="no"
          position="relative">
          </Iframe>

          <div id="chat-app-div">
          <ChatApp/>
          </div>
        </div>

        <Shift />
        {/*auth
          ?<UsersListView/>
          :<Login/>
        */}

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const ConnectedHome = connect(
  mapStateToProps
)(Home)

export default ConnectedHome;