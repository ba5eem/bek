import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { loadUsers } from '../../actions/users';
import { addUser } from '../../actions/register';
import AppHeader from '../../components/AppHeader.js';


class App extends Component {
  constructor() {
    super();
    
    this.state={ 
      data: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() { 
    this.props.loadUsers();

  }

  handleSubmit(response){
    console.log(response);
    //this.props.addUser(response)

  }








  render(){
    // const responseGoogleFail = (response) => {
    //     console.log('fail: ',response);
    //   }
    // const responseGoogle = (response) => {
    //     console.log(response);
    //   }
    console.log("runit");
    console.log(this.props.users);
    return (
      /*EVERYTHING SHOULD GO BETWEEN THESE DIVS*/
        <div className="App">
          <AppHeader/>
          
        </div>
      /*EVERYTHING SHOULD GO BETWEEN THESE DIVS*/
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