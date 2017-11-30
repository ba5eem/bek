import React, { Component } from 'react';
import { connect } from 'react-redux';
import {loadShifts} from '../../actions/shifts';
import AcceptShiftMobile from '../../components/AcceptShift.component.js';
import {filterAll,filterClosed} from '../../lib/Filters';



class AcceptShift extends Component {
  constructor() {
    super();

    this.state={
      query: "65e33ctpsajstq790t3v8mdmrt"
    }
  }

  componentDidMount(){
    this.props.loadShifts();
  }

  singleShift(e,id){
    e.preventDefault();
    this.setState({query:id})
    localStorage.setItem('single',id);
  }

  //based off the uri that is reference in the text message will define what will show up here: 


  render(){
    const query = this.state.query;
    const data = filterClosed(this.props.shifts,'closed',undefined);
    const shifts = filterAll(data,'id', query);
    console.log(shifts);


    return (

        <div className="acceptShift">
          {shifts.map((shift,idx) => {
            return (
              <AcceptShiftMobile
                key={idx}
                shift={shift}
                query={this.state.query}
                showAbsent={this.state.showAbsent}
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

const ConnectedAcceptShift = connect(
  mapStateToProps,
  {loadShifts}
)(AcceptShift)

export default ConnectedAcceptShift;