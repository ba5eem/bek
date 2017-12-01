import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import {availableShift, acceptShifts,declinedShift,loadShifts} from '../../actions/shifts';
import AcceptShiftMobile from '../../components/AcceptShift.component.js';
import {filterAll,filterClosed,filterOpen} from '../../lib/Filters';



class AcceptShift extends Component {
  constructor() {
    super();

    this.state={
      shiftId: '',
      declined: false,
      redirect: false,
      accepted: false
    }
    this.acceptShift = this.acceptShift.bind(this);
    this.declineShift = this.declineShift.bind(this);
  }

  componentDidMount(){
    this.props.loadShifts()
    let url = this.props.location.pathname;
    let shiftId = url.slice(9);
    var userId = url.slice(8,9);
    console.log(url);
    console.log(userId);
    this.setState({shiftId: shiftId, userId: userId})
  }
  acceptShift(e){
    let id = this.state.shiftId;
    let shift = filterAll(this.props.shifts,'id',id )
    let userId = this.state.userId;
    this.props.acceptShifts(shift,userId);
    this.setState({accepted: true})
    setTimeout(function() {
      this.setState({redirect: true}); }.bind(this),900);
    }


  declineShift(e){
    this.setState({declined:true})
    setTimeout(function() {
      this.setState({redirect: true}); }.bind(this),900);
  }

  render(){
    let id = this.state.shiftId;
    const shifts = filterOpen(this.props.shifts,'id',id);
    console.log(shifts);
    console.log(this.props.shifts);
    const declined = this.state.declined;
    if(this.state.redirect) {return ( <Redirect to='/'/>)}


    return (

        <div className="acceptShift">

              {shifts.map((shift,idx)=>{
                return (
                  <AcceptShiftMobile
                    accepted={this.state.accepted}
                    declined={this.state.declined}
                    key={idx}
                    shift={shift}
                    acceptShift={this.acceptShift}
                    declineShift={this.declineShift}/>
                )
              })}

        </div>

    );
  }
}



const mapStateToProps = (state) => {
  return {
    shifts: state.shifts
  }
}

const ConnectedAcceptShift = connect(
  mapStateToProps,
  {loadShifts,availableShift,declinedShift,acceptShifts}
)(AcceptShift)

export default ConnectedAcceptShift;