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
      url: '',
      declined: false,
      redirect: false,
      shift: undefined
    }
    this.acceptShift = this.acceptShift.bind(this);
    this.declineShift = this.declineShift.bind(this);
  }

  componentDidMount(){
    this.props.loadShifts()
    let url = this.props.location.pathname;
    let id = url.slice(8);
    this.setState({url: id})
  }
  acceptShift(e){
    let id = this.state.url;
    let shift = filterAll(this.props.shifts,'id',id )
    this.props.acceptShifts(shift);
    setTimeout(function() {
      this.setState({redirect: true}); }.bind(this),500);
    }


  declineShift(e){
    this.setState({declined:true})
    setTimeout(function() {
      this.setState({redirect: true}); }.bind(this),500);
  }




  //based off the uri that is reference in the text message will define what will show up here: 


  render(){
    let id = this.state.url;
    const data = filterOpen(this.props.shifts,'closed',true);
    const shifts = filterAll(data,'id', id);
    const declined = this.state.declined;
    if(this.state.redirect) {return ( <Redirect to='/'/>)}


    return (

        <div className="acceptShift">

              {shifts.map((shift,idx)=>{
                return (
                  <AcceptShiftMobile
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