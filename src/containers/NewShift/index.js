import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { loadUsers } from '../../actions/users';
import { addUser } from '../../actions/register';
import AppHeader from '../../components/AppHeader.js';
import { QRCode } from 'react-qr-svg';
import Formsy from 'formsy-react';
import MyInput from './MyInput';
import SelectMonth from './SelectMonth';
import SelectDay from './SelectDay';
import PopPop from 'react-poppop';
import Popup from './Popup';
import ShiftLength from './ShiftLength';



class App extends Component {
  constructor(props) {
    super(props);
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.state = { canSubmit: false };
  }
 
  disableButton() {
    this.setState({ canSubmit: false });
  }
 
  enableButton() {
    this.setState({ canSubmit: true });
  }
 
  submit(model) {
    // if(model.quickshift){
    //   console.log(model.quickshift)
    // }

 
    console.log(model);
  }




       // <QRCode
       //              bgColor="#FFFFFF"
       //              fgColor="#000000"
       //              level="Q"
       //              style={{ width: 256 }}
       //              value="www.google.com"
       //          />



  render(){

    return (
        <div>
        <Popup submit={this.submit.bind(this)}/>
        <ShiftLength submit={this.submit.bind(this)}/>
        </div>
    );/*END OF RETURN*/
  }
} /*END OF RENDER AND CLASS APP*/

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  {loadUsers,addUser}
)(App)

export default ConnectedApp;