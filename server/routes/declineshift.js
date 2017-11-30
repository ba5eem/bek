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


route.put('/', (req,res) => {
//authenticate request
  console.log(req.body);
  let b = req.body;
  let start = b.date + 'T' + b.starttime + ':00';
  let end = b.date + 'T' + b.endtime + ':00';
  console.log(start);
  console.log(end)
  //console.log(end);

// var event = {
//   'title':b.title,
//   'summary': b.summary,
//   'location': b.location,
//   'description': "open",
//   'start': {
//     'dateTime': start,
//     'timeZone': 'America/Adak',
//   },
//   'end': {
//     'dateTime': end,
//     'timeZone': 'America/Adak',
//   },
//   'reminders': {
//     'useDefault': false,
//     'overrides': [
//       {'method': 'email', 'minutes': 24 * 60},
//       {'method': 'popup', 'minutes': 10},
//     ],
//   },
// };
// jwtClient.authorize(function (err, tokens) {
  
//  if (err) {
//    console.log("Did not connect!", err);
//    return;
//  } else {
//    console.log("Successfully connected!");
   

// let token = tokens.access_token;
// let calendarId = 'cohortuser19@gmail.com';
// let calendar = google.calendar('v3');

// gcal(token).events.update(calendarId,b.id,event, function(err,data){
//   if(err) console.log(500,err);
//   return calendar.events.list({
//     auth: jwtClient,
//     calendarId: 'cohortuser19@gmail.com'
//   }, function(err,response){
//       var events = response.items;

//       res.json(events);
//   })
//   })
//  }
// });
})


module.exports = route;