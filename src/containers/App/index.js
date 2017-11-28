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
    return (
      <div>
        <div id="iframe-div">
          <Iframe url={`https://calendar.google.com/calendar/embed`}
          width="700px"
          height="500px"
          frameborder="0"
          scrolling="no"
          position="absolute">
          </Iframe>
        </div>
      </div>
    );
  }
}


export default App;


