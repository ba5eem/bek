import React, {Component} from 'react';
import PopPop from 'react-poppop';
import Formsy from 'formsy-react';
import MyInput from './MyInput';
import SelectMonth from './SelectMonth';
import SelectDay from './SelectDay';
import SelectStart from './SelectStart';
import SelectEnd from './SelectEnd';
import ShiftLength from './ShiftLength';

export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      shift:''
    }
  }


  toggleShow(e){
    if(!this.state.show){
      this.setState({shift:e.target.innerHTML, show:true})
    }
    if(this.state.show){
      this.setState({show:false}) 
    }
  }


  render() {
    const {show} = this.state;
    const time = ["4HR SHIFT","6HR SHIFT","8HR SHIFT"]
    return (
      <div style={quickShifts}>
        {
          time.map((item,idx) => {
            return (
              <div key={idx} value={item}>
              <button  style={addShift} onClick={(e) => this.toggleShow(e)}>{item}</button>
              <PopPop position="centerCenter"
                  value={item}
                  open={show}
                  closeBtn={true}
                  closeOnEsc={true}
                  onClose={() => this.toggleShow()}
                  closeOnOverlay={true}>
                  <Formsy onSubmit={this.props.submit}>
                    <MyInput
                    name="title"
                    validations="isWords"
                    validationError="Please enter a title"
                    required
                    />
                    <MyInput
                    name="summary"
                    validations="isWords"
                    validationError="Please enter a title"
                    required
                    />
                    <MyInput
                    name="description"
                    validations="isWords"
                    validationError="This a required field"
                    required
                    />
                    <SelectStart
                    name={this.state.shift}
                    required
                    />
                  <button type="submit" disabled={this.state.canSubmit}>Submit</button>
                </Formsy>
              </PopPop>
              </div>
            );
          })
        }
      </div>
    )
  }
}

const addShift={
  backgroundColor:"cornflowerblue",
  color:"white",
  border: "transparent",
  fontSize: "40px",
  paddingBottom:"10px",
  paddingRight:"15px",
  paddingLeft:"15px",
  marginTop:"10px"
}
const quickShifts = {
  display:"flex-wrap",
  maxWidth: "300px"
}