//jshint esversion: 6
const express     = require('express');
const Pusher      = require('pusher');
const app         = express();
const route       = express.Router();
const google          = require('googleapis');
const privatekey      = require('../config/privatekey.json');

route.get('/', (req,res) => {

//calendar setup:
// configure a JWT auth client
let jwtClient = new google.auth.JWT(
       privatekey.client_email,
       null,
       privatekey.private_key,
       ['https://www.googleapis.com/auth/calendar']);
//authenticate request
jwtClient.authorize(function (err, tokens) {
 if (err) {
   console.log(err);
   return;
 } else {
   console.log("Successfully connected!", tokens);
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
   console.log(events);
   if (events.length == 0) {
       console.log('No events found.', events);
   } else {
       console.log('Event from Google Calendar:');
       for (let event of response.items) {
           console.log('Event name: %s, Creator name: %s, Create date: %s', event.summary, event.creator.displayName, event.start.date);
       }
   }
     res.json(events);
});

})

module.exports = route;