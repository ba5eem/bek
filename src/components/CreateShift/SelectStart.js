// MyInput.js
import { withFormsy } from 'formsy-react';
import React from 'react';


 
class SelectStart extends React.Component {
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
    
    const time = ['SELECT START TIME', "9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00"]








    return (
      <div>
       <select style={select} className="select" onChange={this.changeValue}>
        {
          time.map((item,idx) => {
            return (
              <option key={idx} date={this.props.date}value={item || this.props.start} > {item} </option>
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
  fontSize:"40px",
  marginTop: "20px"
}
 
export default withFormsy(SelectStart);