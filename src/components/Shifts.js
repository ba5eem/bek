import React from 'react';


const Shifts = ({shift,idx,singleShift,exitSingle}) => {
  return (
        <div style={shiftCard} key={idx}>
          <div style={organizer} >{shift.organizer.email}</div>
          <a href={shift.htmlLink}></a>
          <p onClick={(e)=>singleShift(e,shift.id)}>Available Shift</p>
          <p>{shift.status}</p>
          <p>{shift.summary}</p>
          <p>{shift.location}</p>
          <p>{shift.start.dateTime}</p>
          <p>{shift.end.dateTime}</p>
          <br></br>
          <p>Take the Shift</p>
          <p onClick={exitSingle}>BACK</p>
          <p>Messages</p>
        </div>


    )//end of return
};

export default Shifts;


const organizer = {
  backgroundColor: "lightgrey",
  fontSize: "30px",
  flexShrink: "1"
}


const shiftCard = {
    marginTop: "10px",
    width: "400px",
    height:"200px",
    backgroundColor: "lightgreen",
    display: "flex",
    flexFlow: "row-reverse wrap",
    justifyContent:"center"
}













              