import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pusher from 'pusher-js';
import {mainBody} from '../Background/styles';
import {addShift} from '../../actions/shifts.js';
import CreateShift from '../../components/CreateShift.js';
import {filterAll} from '../../lib/Filters';
import {createShift,clearLocal} from '../../lib/Create';


class NewShift extends Component {
  constructor() {
    super();

    this.state={
      query: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(e){ createShift(e) }

  handleSubmit(e){
    e.preventDefault();
    let newShift = createShift(e);
    this.props.addShift(newShift);
    clearLocal();
  }

  render(){
    return (
      <div style={container}>
        <CreateShift
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
           />
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

const ConnectedNewShift = connect(
  mapStateToProps,
  {addShift}
)(NewShift)

export default ConnectedNewShift;