import React from 'react';
import timeDifference from '../lib/TimeDifference';
var moment = require('moment');

const Shifts = ({shift,idx,singleShift,exitSingle,openChat,markAbsent,absent}) => {
  let end = moment(shift.endtime, "HH:mm Z").format('H:mm');
  let start = moment(shift.starttime, "HH:mm Z").format('HH:mm')
  const res = timeDifference(start,end);
  const shiftLength = parseInt(res)
  console.log(absent);


  return (
        <div className="shiftCard" key={idx}>
          <h2 className="shiftCardSummary" >
            {shift.summary ? shift.summary : 'Shift Open'}</h2>
          <h3 className="shiftCardLocation" >
            {shift.location ? shift.location : 'Click for Location'}</h3>
          <div className="shiftCardStart" >
            {shift.starttime ? 'Starts: '+shift.starttime : 'Click for Start Time'}</div>
          <div className="shiftCardLength" >
            {shiftLength ? shiftLength+'hr shift' : 'Click for Shift Length'}</div>
          <button className="chatButtonOnShiftCard" onClick={openChat}>CHAT
          </button>
          <button className="detailsButtonOnShiftCard" onClick={openChat}>
          <a href={shift.htmlLink}>DETAILS</a>
          </button>
          <label htmlFor="absent" onClick={markAbsent}>
          <input id="absent" className="absentBoxOnShiftCard" type="checkbox"/>mark absent
          </label>

          <img className="empCardImage" src="http://bit.ly/2BvryFB" alt="icon"></img>



        </div>


    )//end of return
};

export default Shifts;













