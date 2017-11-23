import React, { Component } from 'react';
import { connect } from 'react-redux';
import {mainBody} from '../Background/styles';
import Mobile from '../../components/Mobile.js';



class App extends Component {
  constructor() {
    super();
    
    this.state={ 
      data: []
    }
  }








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