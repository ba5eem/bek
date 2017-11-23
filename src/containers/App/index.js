import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pusher from 'pusher-js';
import {mainBody} from '../Background/styles';




class App extends Component {
  constructor() {
    super();
    
    this.state={ 
      data: []
    }
  }




pusher = new Pusher('945713eb9dbed89bd426', {
  cluster: 'us2',
  encrypted: true
});

channel = pusher.subscribe('my-channel');
channel.bind('my-event', function(data) {
  alert(data.message);
});



  render(){

    return (

      <div style={mainBody} className="mainBody">

      </div>
    );
  }
}




const container = {
    display: "flex",
    justifyContent:"center",
    position: "relative"
    }


const mobile = {
    maxHeight: "900px",
    zIndex: "0"
    }

const appBody = {
    backgroundColor: "white",
    height: "552px",
    width: "310px",
    left: "286px",
    zIndex: "1",
    position: "absolute",
    marginTop: "164px",
    display:"flex-wrap",
    justifyContent:"center"
    }

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const ConnectedApp = connect(
  mapStateToProps
)(App)

export default ConnectedApp;