import React, { Component } from 'react';
import { connect } from 'react-redux';
import {container,sideBar,mainBody} from './styles';
import SideBar from '../../components/SideBar.js';
import MainBody from '../../components/MainBody.js';

class Background extends Component {
  constructor() {
    super();
    
    this.state={ 
      data: []
    }
  }

  componentDidMount() { 


  }










  render(){

    return (

        <div style={container} className="container">
          <SideBar sideBar={sideBar} />
          <MainBody mainBody={mainBody}/>

        </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const ConnectedBackground = connect(
  mapStateToProps
)(Background)

export default ConnectedBackground;