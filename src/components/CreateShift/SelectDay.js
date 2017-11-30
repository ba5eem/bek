// MyInput.js
import { withFormsy } from 'formsy-react';
import React from 'react';



class SelectDay extends React.Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(event) {
    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    // Important: Don't skip this step. This pattern is required
    // for Formsy to work.
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    // An error message is returned only if the component is invalid
    const errorMessage = this.props.getErrorMessage();

    const day = ['SELECT DAY',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]









    return (
      <div>
       <select style={select} className="select" onChange={this.changeValue}>
        {
          day.map((item,idx) => {
            return (
              <option key={idx} value={item || this.props.day} > {item} </option>
            );
          })
        }
       </select>

        <span>{errorMessage}</span>
      </div>
    );
  }
}
const select = {
  width: "400px",
  textAlign:"center",
  backgroundColor: "#66b3ff",
  fontSize:"25px",
  marginTop: "20px",
  textAlignLast: "center"
}

export default withFormsy(SelectDay);