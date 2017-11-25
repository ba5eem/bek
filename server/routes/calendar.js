//jshint esversion: 6
const express     = require('express');
const Pusher      = require('pusher');
const app         = express();
const route       = express.Router();
var gcal = require('google-calendar');
const google          = require('googleapis');
const privatekey      = require('../config/privatekey.json');
let jwtClient = new google.auth.JWT(
       privatekey.client_email,
       null,
       privatekey.private_key,
       ['https://www.googleapis.com/auth/calendar']);

route.get('/', (req,res) => {

//calendar setup:
// configure a JWT auth client

//authenticate request
jwtClient.authorize(function (err, tokens) {
 if (err) {
   console.log(err);
   return;
 } else {
   console.log("Successfully connected!");
 }
});

//Google Calendar API
let calendar = google.calendar('v3');
calendar.events.list({
   auth: jwtClient,
   calendarId: 'cohortuser19@gmail.com'
}, function (err, response) {
   if (err) {
       console.log('The API returned an error: ' + err);
       return;
   }
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
     res.json(events);
  });
})

route.post('/new', (req,res) => {
//authenticate request
console.log(req.body);
var event = {
  'summary': req.body.summary,
  'location': req.body.location,
  'description': req.body.description,
  'start': {
    'dateTime': req.body.startTime,
    'timeZone': 'America/Los_Angeles',
  },
  'end': {
    'dateTime': req.body.endTime,
    'timeZone': 'America/Los_Angeles',
  },
  'reminders': {
    'useDefault': false,
    'overrides': [
      {'method': 'email', 'minutes': 24 * 60},
      {'method': 'popup', 'minutes': 10},
    ],
  },
};
jwtClient.authorize(function (err, tokens) {
  
 if (err) {
   console.log(err);
   return;
 } else {
   console.log("Successfully connected!");
   

let token = tokens.access_token;
let calendarId = 'cohortuser19@gmail.com';
let calendar = google.calendar('v3');
gcal(token).events.insert(calendarId,event, function(err,data){
  if(err) return res.send(500,err);
  return res.json("success");
  })
 }
});
})


module.exports = route;