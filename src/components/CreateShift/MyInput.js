// MyInput.js
import { withFormsy } from 'formsy-react';
import React from 'react';
 
class MyInput extends React.Component {
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
 
    return (
      <div>
        <input
          style={input}
          onChange={this.changeValue}
          type="text"
          placeholder={this.props.name}
          value={this.props.getValue() || ''}
        />
        <span>{errorMessage}</span>
      </div>
    );
  }
}
const input = {
  width: "400px",
  borderRadius: "5px",
  border: "2px solid #66b3ff",
  fontSize:"40px",
  textAlign:"center",
  marginTop: "10px"

}
// const select = {
//   width: "200px",
//   textAlign:"center",
//   backgroundColor: "#66b3ff",
//   fontSize:"40px"
// }
 
export default withFormsy(MyInput);