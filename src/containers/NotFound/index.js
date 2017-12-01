import React, { Component } from 'react';
import Iframe from 'react-iframe';

class NotFound extends Component {
  constructor() {
    super();

    this.state={
      data: []
    }
  }

  render(){

    return (
      <div id="not-found">

        <img src="http://bit.ly/2BwEWsS" alt="image not found...kinda like this page"/>

      </div>
    );
  }
}


export default NotFound;