import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pusher from 'pusher-js';
import {loadShifts} from '../../actions/shifts.js';
import ClosedShifts from '../../components/closedShifts.components.js';
import {filterAll,filterOpen} from '../../lib/Filters';
import PopPop from 'react-poppop';
import { absentSms } from '../../actions/sms';





class ClosedShift extends Component {


  constructor() {
    super();

    this.state={
      query: false,
      show: false
    }
    this.singleShift = this.singleShift.bind(this);
    this.exitSingle = this.exitSingle.bind(this);
    this.markAbsent = this.markAbsent.bind(this);
    this.openChat = this.openChat.bind(this);
  }

  componentDidMount(){
    this.props.loadShifts();

  }
  singleShift(e,id){
    e.preventDefault();
    this.setState({query:id})
    localStorage.setItem('single',id);
  }

  exitSingle(e){
    e.preventDefault();
    this.setState({query:false})
    localStorage.clear('single');
  }

  markAbsent(e,id){
    e.preventDefault();
    this.setState({show: true, absentShift: id})
    if(this.state.show){
      let shift = filterAll(this.props.shifts, 'id', this.state.absentShift);
      let absentShift = shift.pop()
      this.props.absentSms(absentShift);
      this.setState({show: false})
    }

  }

  openChat(e){

  }

  toggleShow = show => {
    this.setState({show});
  }


  render(){

    const query = this.state.query;
    const data = filterOpen(this.props.shifts,'closed',true);
    const shifts = filterAll(data,'id', query);
    const {show} = this.state;

    return (
      <div id="main-shift-container">
            <div id="todays-shift">Today's Shift</div>
            <PopPop position="centerCenter"
                open={show}
                closeBtn={true}
                closeOnEsc={true}
                onClose={() => this.toggleShow(false)}
                closeOnOverlay={true}>
              <h2 className="confirmAbsentHeading">You Marked this shift as absent, do you want to release it as an available open shift?</h2>
              <button className="confirmAbsentButton" onClick={(e)=>this.markAbsent(e)}>YES</button>
            </PopPop>

          {shifts.map((shift,idx) => {
            return (
              <ClosedShifts
                key={idx}
                shift={shift}
                query={this.state.query}
                absent={this.state.absent}
                singleShift={this.singleShift}
                markAbsent={this.markAbsent}
                openChat={this.openChat}
                exitSingle={this.exitSingle} />
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

const ConnectedClosedShift = connect(
  mapStateToProps,
  {loadShifts,absentSms}
)(ClosedShift)

export default ConnectedClosedShift;