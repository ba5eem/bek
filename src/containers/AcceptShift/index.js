import React, { Component } from 'react';
import { connect } from 'react-redux';
import {availableShift, acceptShifts,declinedShift,loadShifts} from '../../actions/shifts';
import AcceptShiftMobile from '../../components/AcceptShift.component.js';
import {filterAll,filterClosed} from '../../lib/Filters';



class AcceptShift extends Component {
  constructor() {
    super();

    this.state={
      url: ''
    }
    this.acceptShift = this.acceptShift.bind(this);
    this.declineShift = this.declineShift.bind(this);
  }

  componentDidMount(){
    this.props.availableShift();
    this.props.loadShifts()
    let url = this.props.location.pathname;
    this.setState({url: url})
  }
  acceptShift(e){
    let url = this.state.url;
    console.log(url);
    let id = url.slice(8);
    let shift = filterAll(this.props.shifts,'id',id )
    let accepted = e.target.name;
    this.props.acceptShifts(shift);
  }

  declineShift(e){
    let declined = e.target.name;
    let url = this.state.url;
    let id = url.splice(8);
    let shift = filterAll(this.props.shifts,'id',id )
    let accepted = e.target.name;
    this.props.declinedShift(shift);

  }




  //based off the uri that is reference in the text message will define what will show up here: 


  render(){
    const shift = this.props.shift;

    return (

        <div className="acceptShift">
              <AcceptShiftMobile
                shift={shift}
                acceptShift={this.acceptShift}
                declineShift={this.declineShift}/>
        </div>

    );
  }
}



const mapStateToProps = (state) => {
  return {
    shift: state.shifts,
    shifts: state.shifts
  }
}

const ConnectedAcceptShift = connect(
  mapStateToProps,
  {loadShifts,availableShift,declinedShift,acceptShifts}
)(AcceptShift)

export default ConnectedAcceptShift;