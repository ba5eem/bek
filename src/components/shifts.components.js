import React from 'react';
import timeDifference from '../lib/TimeDifference';
var moment = require('moment');

const Shifts = ({shift,idx,singleShift,exitSingle,openChat,markAbsent,absent,query}) => {
  let end = moment(shift.endtime, "HH:mm Z").format('H:mm');
  let start = moment(shift.starttime, "HH:mm Z").format('HH:mm')
  const res = timeDifference(start,end);
  const shiftLength = parseInt(res)


  return (
        <div className="shiftCard" key={idx}>
          <h2 className="shiftCardSummary" onClick={(e)=>singleShift(e,shift.id)}>
            {shift.summary ? shift.summary : 'Shift Open'}</h2>
          <h3 className="shiftCardLocation" >
            {shift.location ? shift.location : 'Click for Location'}</h3>
          <div className="shiftCardStart" >
            {shift.starttime ? 'Starts: '+shift.starttime : 'Click for Start Time'}</div>
          <div className="shiftCardLength" >
            {shiftLength ? shiftLength+'hr shift' : 'Click for Shift Length'}</div>

          {query ?  //if in single view this buttonw will appear
          <button className="backButtonOnShiftCard" onClick={exitSingle}>BACK</button>
          : null}
          <button className="chatButtonOnShiftCard" onClick={openChat}>CHAT
          </button>
          <button className="detailsButtonOnShiftCard" onClick={openChat}>
          <a href={shift.htmlLink}>DETAILS</a>
          </button>
          <label htmlFor="absent" onClick={(e)=>markAbsent(e,shift.id)}>
          <input id="absent" className="absentBoxOnShiftCard" type="checkbox"/>mark absent
          </label>
          <img className="empCardImage" src={shift.userimage} alt="icon"></img>

        </div>


    )//end of return
};

export default Shifts;













