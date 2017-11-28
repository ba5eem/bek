import React, { Component } from 'react';
import Iframe from 'react-iframe';



class App extends Component {
  constructor() {
    super();

    this.state={
      data: []
    }
  }

  render(){
    const path = "0v3li03tvfjntqvhfq6n759dhg@group.calendar.google.com";
    return (
       <div id="main-App-container">

        <div id="iframe-div">
          <Iframe url={`https://calendar.google.com/calendar/embed?src=${path}&ctz=Pacific/Honolulu`}
          width="700px"
          height="500px"
          frameborder="0"
          scrolling="no"
          position="absolute">
          </Iframe>

        </div>
        <div id="chat-app-div">

        </div>
        {/*auth
          ?<UsersListView/>
          :<Login/>
        */}



      </div>
    );
  }
}


export default App;


