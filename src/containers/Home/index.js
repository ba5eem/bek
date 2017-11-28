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
          width="700px"
          height="500px"
          frameborder="0"
          scrolling="no"
          position="absolute">
          </Iframe>
        <Shift />
        </div>
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

const ConnectedHome = connect(
  mapStateToProps
)(Home)

export default ConnectedHome;




// <iframe url="https://calendar.google.com/calendar/embed?
//         title=bek&amp;
//         height=600&amp;
//         wkst=1&amp;
//         bgcolor=%23ccffff&amp;
//         src=cohortuser19%40gmail.com&amp;
//         color=%231B887A&amp;
//         src=en.usa%23holiday%40group.v.calendar.google.com&amp;
//         color=%23125A12&amp;
//         ctz=Pacific%2FHonolulu"
//         style="border-width:0"
//         width="700"
//         height="500"
//         frameborder="0"
//         scrolling="no"></iframe>