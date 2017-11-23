import React, { Component } from 'react';
import { connect } from 'react-redux';
import {mainBody} from '../Background/styles';
import Mobile from '../../components/Mobile.js';



class MobileView extends Component {
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

      <div style={mainBody} className="mainBody">

        {/*MOBILE VIEW*/}
          <div style={container} className="mobile">
            <img style={mobile} src="http://bit.ly/2jQCkSn" alt="phone"/>
            <div style={appBody}>
              <Mobile />
            </div>
          </div>
        {/*MOBILE VIEW*/}
      </div>

    );
  }
}

const container = {
    display: "flex",
    justifyContent:"center",
    position: "relative"
    }


const mobile = {
    maxHeight: "900px",
    zIndex: "0"
    }

const appBody = {
    backgroundColor: "white",
    height: "552px",
    width: "311px",
    left: "285px",
    zIndex: "1",
    position: "absolute",
    marginTop: "164px",
    display:"flex-wrap",
    justifyContent:"center",
    textAlign: "center"
    }

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const ConnectedMobileView = connect(
  mapStateToProps
)(MobileView)

export default ConnectedMobileView;