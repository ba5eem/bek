import React from 'react';

const SideBar = ({sideBar}) => {
  return (

      <div style={sideBar} className="sidebar">

          <img style={phone} src="http://bit.ly/2jQCkSn" alt="phone"/>
          <img style={phone} src="http://bit.ly/2mV5L6W" alt="phone"/>
          <img style={phone} src="http://bit.ly/2A7UiUC" alt="phone"/>



      </div>

    )//end of return
};

export default SideBar;

const phone = {
      height:"300px",
      maxWidth: "400px"
    }