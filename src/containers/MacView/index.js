import React, { Component } from 'react';
import { connect } from 'react-redux';
import {mainBody} from '../Background/styles';
import Mac from '../../components/Mac.js';



class MacView extends Component {
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
            <img style={mac} src="http://bit.ly/2A7UiUC" alt="phone"/>
            <div style={macAppBody}>
              <Mac />
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


const mac = {
    marginTop: "100px",
    width: "900px",
    height:"600px",
    zIndex: "0"
    }

const macAppBody = {
    backgroundColor: "white",
    height: "467px",
    width: "681px",
    left: "110px",
    zIndex: "1",
    position: "absolute",
    marginTop: "138px",
    display:"flex-wrap",
    justifyContent:"center",
    textAlign:"center"
    }

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const ConnectedMacView = connect(
  mapStateToProps
)(MacView)

export default ConnectedMacView;