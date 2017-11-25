import React from 'react';

const SideBar = ({sideBar,mobileView,tabletView,macView}) => {
  return (

      <div style={sideBar} className="sidebar">

          <img onClick={mobileView} style={phone} src="http://bit.ly/2jQCkSn" alt="phone"/>
          <img onClick={tabletView} style={phone} src="http://bit.ly/2mV5L6W" alt="tablet"/>
          <img onClick={macView} style={phone} src="http://bit.ly/2A7UiUC" alt="mac"/>



      </div>

    )//end of return
};

export default SideBar;

const phone = {
      height:"300px",
      maxWidth: "400px"
    }