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
    const {user} = this.state;
    return (
      <div>
        <button style={addShift} onClick={() => this.toggleShow(true)}>Edit Phone</button>
        <PopPop position="centerCenter"
                open={show}
                closeBtn={true}
                closeOnEsc={true}
                onClose={() => this.toggleShow(false)}
                closeOnOverlay={true}>
          <Formsy onSubmit={this.props.submit}>
            <MyInputPhone
              name="phone"
              validations="isWords"
              validationError="Please enter a valid phone"
              required
              value={user}
            />
            <button style={select} type="submit">Submit</button>
            <h3 style={close}>{!this.props.canSubmit ? "PLEASE COMPLETE ALL FIELDS": "HIT THE X WHEN YOU ARE DONE"}</h3>
          </Formsy>

        </PopPop>

      </div>
    )
  }
}

const addShift={
  backgroundColor:"#66b3ff",
  color:"white",
  border: "transparent",
  fontSize: "30px",
  paddingBottom:"10px",
  paddingRight:"15px",
  paddingLeft:"15px",
  marginTop:"10px"
}
const select = {
  width: "400px",
  textAlign:"center",
  backgroundColor: "#66b3ff",
  fontSize:"40px"
}
const close ={
  textAlign: "center"
}