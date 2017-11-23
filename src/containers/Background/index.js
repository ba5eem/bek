import React, { Component } from 'react';
import { connect } from 'react-redux';
import {container,sideBar,mainBody} from './styles';
import SideBar from '../../components/SideBar.js';
import MobileView from '../MobileView';

class Background extends Component {
  constructor() {
    super();
    
    this.state={ 
      mobileView: true,
      tabletView: false,
      macView: false,
    }
    this.mobileView = this.mobileView.bind(this);
    this.tabletView = this.tabletView.bind(this);
    this.macView = this.macView.bind(this);

  }

  mobileView(){

  }
  tabletView(){
    
  }
  macView(){
    
  }












  render(){

    return (

        <div style={container} className="container">
          <SideBar 

            sideBar={sideBar} />
          <MobileView />

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