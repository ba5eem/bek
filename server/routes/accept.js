//jshint esversion: 6
const express     = require('express');
const Pusher      = require('pusher');
const app         = express();
const moment      = require('moment');
const route       = express.Router();
const gcal        = require('google-calendar');
const google      = require('googleapis');
const privatekey  = require('../config/privatekey.json');
let jwtClient     = new google.auth.JWT(
       privatekey.client_email,
       null,
       privatekey.private_key,
       ['https://www.googleapis.com/auth/calendar']);


route.get('/', (req,res) =>{
    console.log(req.body)
  res.json('ola')
});

route.get('/:id', (req,res) => {
  let local = {}
  let id = req.params.id;
  console.log(id);


  jwtClient.authorize(function (err, tokens) {
   if (err) {console.log(err); return;} 
   else {console.log("Successfully connected!");}
  });

let calendar = google.calendar('v3');
calendar.events.list({
   auth: jwtClient,
   calendarId: 'cohortuser19@gmail.com'
}, function (err, response) {
   if (err) { console.log('The API returned an error: ' + err);
       return;}


   var events = response.items;
   //console.log(events);
   if (events.length == 0) {
       console.log('No events found.');
   } else {
       //console.log('Event from Google Calendar:');
       for (let event of response.items) {
           //console.log('Event name: %s, Creator name: %s, Create date: %s', event.summary, event.creator.displayName, event.start.date);
       }
   } 
    for (var i = 0; i < events.length; i ++){
      let date = events[i].start.dateTime;
      let starttime = events[i].start.dateTime;
      let endtime = events[i].end.dateTime;
      let created = events[i].created;
      let organizer = events[i].organizer.email;
        if(date !== undefined){
          let res = date.slice(0,-15);
          events[i].date = res;
        }
        if(starttime !== undefined){
          let res = starttime.slice(11,-9);
          events[i].starttime = res;
        }
        if(endtime !== undefined){
          let res = endtime.slice(11,-9);
          events[i].endtime = res;
        }
        if(created !== undefined){
          let res = created.slice(11,-8);
          events[i].created = res;
        }
        if(organizer !== undefined){
          events[i].organizer = organizer
        }
        delete events[i].kind;
        delete events[i].etag;
        delete events[i].creator;//not sure if we need this - it should always be the admin right? - thought anyone?
        delete events[i].iCalUID;
        delete events[i].reminders;
        delete events[i].updated;
        delete events[i].start;
        delete events[i].end;
        delete events[i].sequence;
        }
        let shift = events.filter((elem)=>{
          return elem.id === id;
        })
        res.json(shift);
  });
  
})



module.exports = route;