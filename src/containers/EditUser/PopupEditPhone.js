import React, {Component} from 'react';
import PopPop from 'react-poppop';
import Formsy from 'formsy-react';
import MyInputPhone from './MyInputPhone';

//import ShiftLength from './ShiftLength';

export default class PopupEditPhone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  toggleShow = show => {
    this.setState({show});
  }
   changeValue(event) {
    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    // Important: Don't skip this step. This pattern is required
    // for Formsy to work.
    this.props.setValue(event.currentTarget.value);
  }

render() {
   //const errorMessage = this.props.getErrorMessage();
   const {show} = this.state;
   let id = this.props.id.id;
   return (
     <div>
       <button style={addShift} onClick={() => this.toggleShow(true)}>Edit Phone</button>
       <PopPop position="centerCenter"
               open={show}
               closeBtn={true}
               closeOnEsc={true}
               contentStyle={{overflow: "hidden"}}
               onClose={() => this.toggleShow(false)}
               closeOnOverlay={true}>
         <Formsy onSubmit={(e)=>this.props.submit(e,id)}>
           <MyInputPhone
             name="phone"
             validations="isNumeric"
             validationError="Please enter a valid phone"
             required />
           <button style={select} type="submit">Submit</button>
           <h3 style={close}>{!this.props.canSubmit ? "PLEASE COMPLETE ALL FIELDS": "CLICK 'X' WHEN YOU ARE DONE"}</h3>
         </Formsy>

       </PopPop>

     </div>
   )
 }
}


const addShift={
  backgroundColor:"#66b3ff",
  color: "white",
  border: "transparent",
  fontSize: "20px",
  padding: "10px",
  marginTop: "10px",
  width: "150px"
}
const select = {
  width: "305px",
  textAlign:"center",
  backgroundColor: "#66b3ff",
  fontSize:"20px",
  color: "white",
  marginTop: "10px"
}
const close ={
  textAlign: "center"
}