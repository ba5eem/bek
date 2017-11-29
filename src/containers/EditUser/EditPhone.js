import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editPhone } from '../../actions/users';
//import { QRCode } from 'react-qr-svg';
//import Formsy from 'formsy-react';
//import MyInput from '../../components/CreateShift/MyInput';
//import SelectMonth from '../../components/CreateShift/SelectMonth';
//import SelectDay from '../../components/CreateShift/SelectDay';
//import PopPop from 'react-poppop';
import PopupUser from './PopupUser';


class EditPhone extends Component {
  constructor(props) {
    super(props);

    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.quickSubmit = this.quickSubmit.bind(this);
    this.state = { canSubmit: false, show: false };
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }



  render(){
    return (
        <div style={quickShifts}>


        </div>
    );/*END OF RETURN*/
  }
} /*END OF RENDER AND CLASS APP*/

const quickShifts = {
  display:"flex",
  textAlign:"center"
}
const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const ConnectedEditPhone = connect(
  mapStateToProps,
  {editPhone}
)(NewShift)

export default ConnectedEditPhone;