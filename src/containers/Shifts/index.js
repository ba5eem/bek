import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pusher from 'pusher-js';
import {mainBody} from '../Background/styles';
import {loadShifts} from '../../actions/shifts.js';



class Shift extends Component {
  constructor() {
    super();
    
    this.state={ 
      shifts: undefined
    }
  }

  componentDidMount(){
    this.props.loadShifts();
  }






  render(){
    let shifts = this.props.shifts;

    return (
      <div style={container}>
        <div style={shiftCard}>
          {shifts.map((shift,idx) => {
            console.log(shift)
            return (
              <div style={shiftCard} key={idx}>
                <div style={organizer} >{shift.organizer.email}</div>
                <a href={shift.htmlLink}></a>
                <p>{shift.status}</p>
                <p>{shift.summary}</p>
                <p>{shift.location}</p>
                <p>{shift.start.dateTime}</p>
                <p>{shift.end.dateTime}</p>
              </div>)

            })
          }
        </div>
      </div>
    );
  }
}




const container = {
    display: "flex-wrap",
    justifyContent:"center"
    }
const shiftCard = {
    marginTop: "10px",
    width: "400px",
    height:"200px",
    backgroundColor: "lightgreen",
    display: "flex",
    flexFlow: "row-reverse wrap",
    justifyContent:"center"
    }
const organizer = {
  backgroundColor: "lightgrey",
  fontSize: "30px",
  flexShrink: "1"
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