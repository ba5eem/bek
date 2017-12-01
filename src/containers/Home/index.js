/*import React, { Component } from 'react';
import { connect } from 'react-redux';
import Iframe from 'react-iframe';
//import Pusher from 'pusher-js';
import NewShift from '../NewShift';
import ClosedShift from '../ClosedShift';
import OpenShift from '../OpenShift';
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
      return (
        <div id="main-Home-container">
          <div id="column-1">
          <NewShift />
          <div className="open-shifts">*** Open Shifts ***</div>
          <OpenShift />
          </div>

          <div id="iframe-div">
          <div id="calendar-title">-- Cohort 19 -- </div>
          <Iframe url={`https://calendar.google.com/calendar/embed?src=${path}&ctz=Pacific/Honolulu`}
            width="600px"
            height="500px"
            scrolling="yes"
            position="relative">
            </Iframe>

            <div id="chat-app-div">
            <ChatApp/>
            </div>
          </div>
          <ClosedShift />


        </div>
      )
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

export default ConnectedHome;*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Iframe from 'react-iframe';
//import Pusher from 'pusher-js';
import NewShift from '../NewShift';
import ClosedShift from '../ClosedShift';
import OpenShift from '../OpenShift';
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

    return (
      <div id="main-Home-container">
        <div id="column-1">
        <NewShift />
        <div className="open-shifts">*** Open Shifts ***</div>
        <OpenShift />
        </div>

        <div id="iframe-div">
        <div id="calendar-title">-- Cohort 19 -- </div>
        <Iframe url={`https://calendar.google.com/calendar/embed?src=${path}&ctz=Pacific/Honolulu`}
          width="600px"
          height="500px"
          scrolling="yes"
          position="relative">
          </Iframe>

          <div id="chat-app-div">
          <ChatApp/>
          </div>
        </div>
        <ClosedShift />
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