import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pusher from 'pusher-js';
import {mainBody} from '../Background/styles';
import {loadShifts} from '../../actions/shifts.js';
import Shifts from '../../components/Shifts.js';
import {filterAll} from '../../lib/Filters';


class Shift extends Component {
  constructor() {
    super();
    
    this.state={ 
      query: false
    }
    this.singleShift = this.singleShift.bind(this);
    this.exitSingle = this.exitSingle.bind(this);
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






  render(){
    const query = this.state.query;
    const shifts = filterAll(this.props.shifts,'id',query);
    return (
      <div style={container}>

          {shifts.map((shift,idx) => {
            return (
              <Shifts 
                key={idx} 
                shift={shift}
                singleShift={this.singleShift}
                exitSingle={this.exitSingle} />)
            })}
      </div>
    );
  }
}




const container = {
    display: "flex-wrap",
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