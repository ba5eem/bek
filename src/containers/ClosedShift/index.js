import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pusher from 'pusher-js';
import {loadShifts} from '../../actions/shifts.js';
import ClosedShifts from '../../components/closedShifts.components.js';
import {filterAll,filterOpen} from '../../lib/Filters';
import PopPop from 'react-poppop';
import { absentSms } from '../../actions/sms';
import ChatApp from '../Chat/ChatApp';





class ClosedShift extends Component {


  constructor() {
    super();

    this.state={
      query: false,
      show: false,
      chat: false,
      channel: '',
      user: ''
    }
    this.singleShift = this.singleShift.bind(this);
    this.exitSingle = this.exitSingle.bind(this);
    this.markAbsent = this.markAbsent.bind(this);
    this.openChat = this.openChat.bind(this);
  }

  componentDidMount(){
    this.props.loadShifts();

  }
  // componentWillReceiveProps(){
  //   this.props.loadShifts();
  // }
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

  openChat(e,elem){
    console.log(e.target);
    console.log(elem);
    localStorage.setItem('channel',elem.summary);
    localStorage.setItem('author',elem.organizer);
    this.setState({
      chat: true,
      channel: elem.summary,
      user: elem.useremail})
  }



  toggleShow = show => {
    this.setState({show});
  }

  closeChat(){
    localStorage.removeItem('channel');
    localStorage.removeItem('author');
    this.setState({chat: false, channel: ''})
  }



  render(){

    const query = this.state.query;
    const data = filterOpen(this.props.shifts,'closed',true);
    const shifts = filterAll(data,'id', query);
    const {show} = this.state;
    const {chat} = this.state;

    return (
      <div id="main-shift-container">
            <div id="todays-shifts">Today's Shifts</div>
            <PopPop position="centerCenter"
                open={show}
                closeBtn={true}
                closeOnEsc={true}
                onClose={() => this.toggleShow(false)}
                contentStyle={{overflow: "hidden"}}
                closeOnOverlay={true}>
              <h3 className="confirmAbsentHeading">You Marked this shift as absent.<br/>Are you sure you want to release this shift?</h3>
             <center><button className="confirmAbsentButton" onClick={(e)=>this.markAbsent(e)}>YES</button></center>
            </PopPop>
            <PopPop position="centerCenter"
                open={chat}
                closeBtn={true}
                closeOnEsc={true}
                onClose={() => this.closeChat()}
                contentStyle={{overflow: "hidden"}}
                closeOnOverlay={true}>
                <ChatApp channel={this.state.channel} />
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