import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUsers } from '../../actions/users';
import { addShift,addSix,addEight,addCustom } from '../../actions/shifts';
import Custom from '../../components/CreateShift/Custom';
import ShiftLength from '../../components/CreateShift/ShiftLength';
import { notifySms } from '../../actions/sms';

class NewShift extends Component {
  constructor(props) {
    super(props);

    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.quickSubmit = this.quickSubmit.bind(this);
    this.state = { canSubmit: false, hide: false, refs:'' };
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  submit(model) {
    this.setState({refs:''})
    if(model.title === undefined){
      this.setState({canSubmit: false})
    }
    if(model.summary === undefined){
      this.setState({canSubmit: false})
    }
    if(model.start === undefined){
      this.setState({canSubmit: false})
    }
    if(model.end === undefined){
      this.setState({canSubmit: false})
    }
    else{
      this.setState({canSubmit: true, hide: true})
      this.props.addCustom(model)
      console.log(model);
    }
  }

  quickSubmit(model) {
    console.log(model);
    if(model.summary !== undefined){
      if(model.title !==undefined){
        this.setState({show:false})
        this.setState({canSubmit:true})
        if(model._4 !== undefined){this.props.addShift(model)}
        if(model._6 !== undefined){this.props.addSix(model)}
        if(model._8 !== undefined){this.props.addEight(model)}
      }
    }
  }

  render(){
    return (
      <div>
        <div id="todays-shifts">Create a New Shift</div>
        <div id="main-shift-button-container">
        <Custom
          hide={this.state.hide}
          submit={this.submit.bind(this)}
          canSubmit={this.state.canSubmit}/>
        <ShiftLength
          hide={this.state.hide}
          submit={this.quickSubmit.bind(this)}
          canSubmit={this.state.canSubmit}/>
        </div>
      </div>
    );/*END OF RETURN*/
  }
} /*END OF RENDER AND CLASS APP*/

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const ConnectedNewShift = connect(
  mapStateToProps,
  {loadUsers,addShift,notifySms,addSix,addEight,addCustom}
)(NewShift)

export default ConnectedNewShift;