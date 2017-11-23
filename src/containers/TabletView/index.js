import React, { Component } from 'react';
import { connect } from 'react-redux';
import {mainBody} from '../Background/styles';
import Tablet from '../../components/Tablet.js';
import TabletDashboard from '../../components/TabletDashboard.js';



class TabletView extends Component {
  constructor() {
    super();
    
    this.state={ 
      user: localStorage.user,
      auth: localStorage.auth
    }
  }

  componentDidMount() { 


  }








  render(){
    const user = this.state.user;
    const auth = this.state.auth;

    return (

      <div style={mainBody} className="mainBody">

        {/*MOBILE VIEW*/}
          <div style={container} className="mobile">
            <img style={tablet} src="http://bit.ly/2ziG0PK" alt="phone"/>
            <div style={tabletAppBody} >
              {!auth ? <Tablet /> : null }
              {auth ? <TabletDashboard user={user}/> : null }
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


const tablet = {
    width: "800px",
    zIndex: "0"
    }


const tabletAppBody = {
    backgroundColor: "lightgrey",
    height: "602px",
    width: "515px",
    left: "142px",
    zIndex: "1",
    position: "absolute",
    marginTop: "149px",
    display:"flex-wrap",
    justifyContent:"center",
    textAlign: "center"
    }

const mapStateToProps = (state) => {
  return {
    users: state.users,
    user: localStorage.user,
    auth: localStorage.auth
  }
}

const ConnectedTabletView = connect(
  mapStateToProps
)(TabletView)

export default ConnectedTabletView;