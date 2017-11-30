import React from 'react';
import { Link } from 'react-router-dom';

const Analytics = ({hours}) => {
    const absent = hours-20;
  return (

      <div className='userAnalytics'>
        <div id="analyticsFoundation"></div>
        <div id="hours"></div> {hours} HOURS
        <div id="absent"></div> {absent} absent





      </div>


  )
}
const profilepicStyle={
  width: 100,
  height: 100,
  padding: 30
}

export default Analytics;