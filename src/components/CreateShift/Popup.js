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
      show: false
    }
  }

  toggleShow = show => {
    this.setState({show});
  }


  render() {
    const {show} = this.state;
    return (
      <div>
        <button style={addShift} onClick={() => this.toggleShow(true)}>CUSTOM</button>
        <PopPop position="centerCenter"
                open={show}
                closeBtn={true}
                closeOnEsc={true}
                onClose={() => this.toggleShow(false)}
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
              validationError="This a required field"
              required
            />
            <MyInput
              name="description"
              validations="isWords"
              validationError="This a required field"
              required
            />
            <SelectMonth
              name="month"
              required
              />
            <SelectDay
              name="day"
              required
              />
            <SelectStart
              name="start"
              required
              />
            <SelectEnd
              name="end"
              />
            <button type="submit" disabled={this.state.canSubmit}>Submit</button>
          </Formsy>
        </PopPop>
      </div>
    )
  }
}

const addShift={
  backgroundColor:"cornflowerblue",
  color:"white",
  border: "transparent",
  fontSize: "30px",
  paddingBottom:"10px",
  paddingRight:"15px",
  paddingLeft:"15px",
  marginTop:"10px"
}