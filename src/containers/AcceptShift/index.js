import React, { Component } from 'react';
import { connect } from 'react-redux';
import {availableShift, acceptShifts,declinedShift} from '../../actions/shifts';
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
    let url = this.props.location;
    this.setState({url: url})
  }
  acceptShift(e){
    let accepted = e.target.name;
    let url = this.state.url;
    this.props.acceptShifts(url);
  }

  declineShift(e,id){
    let declined = e.target.name;
    let url = this.state.url;
    this.props.declinedShift(url);

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
    shift: state.shifts
  }
}

const ConnectedAcceptShift = connect(
  mapStateToProps,
  {availableShift,declinedShift,acceptShifts}
)(AcceptShift)

export default ConnectedAcceptShift;