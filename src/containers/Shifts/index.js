import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pusher from 'pusher-js';
import {mainBody} from '../Background/styles';
import {loadShifts} from '../../actions/shifts.js';



class Shift extends Component {
  constructor() {
    super();
    
    this.state={ 
      data: []
    }
  }

  componentDidMount(){
    this.props.loadShifts()
  }






  render(){

    return (

      <div style={mainBody} className="mainBody">
      Hello WORLD
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
    shifts: state.shifts
  }
}

const ConnectedShift = connect(
  mapStateToProps,
  {loadShifts}
)(Shift)

export default ConnectedShift;