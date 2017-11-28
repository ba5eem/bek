import React from 'react';
import Iframe from 'react-iframe';


const CalendarView = ({}) => {
  const path = "cohortuser19%40gmail.com";
  return (
    <div className='eachShift'>
      <div id="iframe-div">
        <Iframe url={`https://calendar.google.com/calendar/embed?src=${path}&ctz=Pacific/Honolulu`}
        width="700px"
        height="500px"
        frameborder="0"
        scrolling="no"
        position="absolute">
        </Iframe>
      </div>
    </div>
  )
}

export default CalendarView;