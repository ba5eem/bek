import React from 'react';
import timeDifference from '../lib/TimeDifference';
var moment = require('moment');

const closedShifts = ({shift,idx,singleShift,exitSingle,openChat,markAbsent,absent,query}) => {
  let end = moment(shift.endtime, "HH:mm Z").format('H:mm');
  let start = moment(shift.starttime, "HH:mm Z").format('HH:mm')
  const res = timeDifference(start,end);
  const shiftLength = parseInt(res)


  return (
        <div className="shiftCard" key={idx}>
          <div className="shiftCardSummary" onClick={(e)=>singleShift(e,shift.id)}>
            {shift.summary ? shift.summary : 'Shift Open'}</div>
          <div className="shiftCardLocation" >
            {shift.location ? shift.location : 'Click for Location'}</div>
          <img className="empCardImage" src={shift.userimage} alt="icon"></img>
          <div className="shiftCardStart" >
            {shift.starttime ? 'Starts: '+shift.starttime : 'Click for Start Time'}</div>
          <div className="shiftCardLength" >
            {shiftLength ? shiftLength+'hr shift' : 'Click for Shift Length'}</div>

          {query ?  //if in single view this buttonw will appear
          <button className="backButtonOnShiftCard" onClick={exitSingle}>BACK</button>
          : null}
          <button className="chatButtonOnShiftCard" onClick={(e)=>openChat(e,shift)}>CHAT
          </button>
          <button className="detailsButtonOnShiftCard">
          <a href={shift.htmlLink} target="_blank">DETAILS</a>
          </button>
          <label htmlFor="absent" onClick={(e)=>markAbsent(e,shift.id)}>
          <input id="absent" className="absentBoxOnShiftCard" type="checkbox"/>absent
          </label>


        </div>


    )//end of return
};

export default closedShifts;













