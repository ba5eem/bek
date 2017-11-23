import React from 'react';

const Tablet = ({}) => {
  return (
    <div>
        <div style={mobileContainer}>
            Welcome to BEK
        </div>
        <div>
            <img style={avatar} src="http://bit.ly/2hkiY4s" alt="login"/>
        </div>
        <div>
            <img style={login} src="http://bit.ly/2hNrd8v" alt="login"/>
        </div>
    </div>

    )//end of return
};

export default Tablet;

const mobileContainer = {
    backgroundColor: "lightblue",
    textAlign:"center",
    fontSize:"40px"

    }

const avatar = {
    margin: "30px",
    height: "260px",
    }
const login = {
    marginTop:"40px",
    maxWidth: "300px"

    }

