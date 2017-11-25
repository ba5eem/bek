import React from 'react';
import Login from '../containers/Login';

const MacDashboard = ({user}) => {
const pic = localStorage.pic;
  return (
    <div>
        <div style={mobileContainer}>
            Welcome {user} to Dashboard View
        </div>
        <div>
            <img style={avatar} src={pic ? pic : "http://bit.ly/2hkiY4s"} alt="login"/>
        </div>
        <div>
        </div>
    </div>

    )//end of return
};

export default MacDashboard;

const mobileContainer = {
    backgroundColor: "lightblue",
    textAlign:"center",
    fontSize:"40px"

    }

const avatar = {
    margin: "30px",
    height: "260px",
    }


