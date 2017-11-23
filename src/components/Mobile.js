import React from 'react';

const Mobile = ({}) => {
  return (

      <div style={mobile} className="mobile">


        <img style={mobile} src="http://bit.ly/2jQCkSn" alt="phone"/>
        <div style={appBody}>Bek</div>
    
      </div>

    )//end of return
};

export default Mobile;

const mobile = {
    maxHeight: "900px"
    }

const appBody = {
    backgroundColor: "white",
    height: "400px",
    width: "400px"
    }