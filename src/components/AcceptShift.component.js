import React from 'react';
import timeDifference from '../lib/TimeDifference';
var moment = require('moment');

const AcceptShiftMobile = ({shift,idx,singleShift,exitSingle,acceptShift,declineShift}) => {
  let end = moment(shift.endtime, "HH:mm Z").format('H:mm');
  let start = moment(shift.starttime, "HH:mm Z").format('HH:mm')
  const res = timeDifference(start,end);
  const shiftLength = parseInt(res)


  return (
        <div className="mobile-container">
          <div className="accept-shiftCard" key={idx}>
            <div className="open-shiftCardSummary" onClick={(e)=>singleShift(e,shift.id)}>
              {shift.summary ? shift.summary : 'Shift Open'}</div>
            <div className="shiftCardLocation" >
              {shift.location ? shift.location : 'Click for Location'}</div>
            <img className="empCardImage" src="https://news.postimees.ee/public/img/shrek-gray.svg" alt="icon"></img>
            <div className="shiftCardStart" >
              {shift.starttime ? 'Starts: '+shift.starttime : 'Click for Start Time'}</div>
            <div className="shiftCardLength" >
              {shiftLength ? shiftLength+'hr shift' : 'Click for Shift Length'}</div>
          </div>

          <div className="mobileButtons">
            <button className="acceptShiftButton" onClick={(e)=>acceptShift(e,shift.id)}>ACCEPT</button>
            <button className="declineShift" onClick={(e)=>declineShift(e,shift.id)}>DECLINE
            </button>
            <button className="detailsShift">
            <a href={shift.htmlLink} target="_blank">DETAILS</a>
            </button>
          </div>

        </div>


    )//end of return
};

export default AcceptShiftMobile;












