import React from 'react';
import Login from '../containers/Login';

const Mac = ({}) => {
  return (
    <div>
        <div style={mobileContainer}>
            Welcome to BEK MAC
        </div>
        <div>
            <img style={avatar} src="http://bit.ly/2hkiY4s" alt="login"/>
        </div>
        <div>
            <Login />
        </div>
    </div>

    )//end of return
};

export default Mac;

const mobileContainer = {
    backgroundColor: "lightblue",
    textAlign:"center",
    fontSize:"40px"

    }

const avatar = {
    margin: "30px",
    height: "260px",
    }


