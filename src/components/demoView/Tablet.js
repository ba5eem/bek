import React from 'react';
import Login from '../containers/Login';

const Tablet = ({}) => {
  return (
    <div>
        <div style={mobileContainer}>
            Welcome to BEK TABLET
        </div>
        <div>
            <img style={avatar} src="http://bit.ly/2hkiY4s" alt="login"/>
        </div>
        <div>
        </div>
    </div>

    )//end of return
};

export default Tablet;

const mobileContainer = {
    backgroundColor: "lightblue",
    textAlign:"center",
    fontSize:"40px",
    display: "flex-wrap",
    justifyContent: "center"

    }

const avatar = {
    margin: "30px",
    height: "260px",
    }
const login = {
    margin:"auto",
    maxWidth: "500px"

    }

