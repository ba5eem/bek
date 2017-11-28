import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionsms } from '../../actions/sms';


class SendSMS extends Component {
  constructor(props){
    super(props)

    this.state = {
      phone: ''
    }
  this.handleChangePhone = this.handleChangePhone.bind(this);
  this.handleSending = this.handleSending.bind(this);
  }

  componentDidMount(){

  }

  handleChangePhone(event){
    this.setState({
      phone: event.target.value
    })
    console.log(event)
  }

  handleSending(event) {
    event.preventDefault();

    /*const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;*/
    let content = {
      phone: this.state.phone,
      payload: "Shift Open! Shift Details here"
    }
    console.log(content)


      this.props.actionsms(content)

      this.setState({
        phone:'',
      });

  }

  render() {
    return (
      <div>
      SEND SMS
      <form onSubmit={this.handleSending}>
       <input type="text" id="phonenumber" className="form-control sms-input" placeholder="808-xxx-xxxx" value={this.state.phone} onChange={this.handleChangePhone}/>
       <button ref="buttoninput" className="btn btn-default phone-button">Get Info Sent To You</button>
       </form>
      </div>
    )
  }



}



const mapDispatchToProps = (dispatch) => {
  return {
    actionsms: (sms) => {
      dispatch(actionsms(sms))
    }
  }
}

const ConnectedSendSMS = connect(
  null,
  mapDispatchToProps
)(SendSMS);

export default ConnectedSendSMS;