import React, { Component } from 'react';
import { connect } from 'react-redux';
import {container,sideBar,mainBody} from './styles';
import SideBar from '../../components/SideBar.js';
import MobileView from '../MobileView';
import TabletView from '../TabletView';
import MacView from '../MacView';

class Background extends Component {
  constructor() {
    super();
    
    this.state={ 
      mobileView: false,
      tabletView: false,
      macView: true,
    }
    this.mobileView = this.mobileView.bind(this);
    this.tabletView = this.tabletView.bind(this);
    this.macView = this.macView.bind(this);

  }

  mobileView(e){
    e.preventDefault();
    console.log('Mobile View: ',e.target.name);
    this.setState({
      mobileView: true,
      tabletView: false,
      macView: false
    })

  }
  tabletView(e){
    e.preventDefault();
    console.log('Tablet View: ',e.target.name);
    this.setState({
      mobileView: false,
      tabletView: true,
      macView: false
    })
    
  }
  macView(e){
    e.preventDefault();
    console.log('Mac View: ',e.target.name);
    this.setState({
      mobileView: false,
      tabletView: false,
      macView: true
    })
    
  }












  render(){
    const mobile = this.state.mobileView;
    const tablet = this.state.tabletView;
    const mac = this.state.macView;

    return (

        <div style={container} className="container">
          <SideBar 
            mobileView={this.mobileView}
            tabletView={this.tabletView}
            macView={this.macView}
            sideBar={sideBar} />
          
          {mobile ? <MobileView /> : null }
          {tablet ? <TabletView /> : null }
          {mac ? <MacView /> : null }

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