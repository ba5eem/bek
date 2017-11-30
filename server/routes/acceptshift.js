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
  let body = req.body[0]
  let today = moment().format('YYYY-MM-DDT');
  let start = body.date+'T'+body.starttime+':00-'+body.starttime+':00';
  let end = body.date+'T'+body.endtime+':00-'+body.endtime+':00';

  var event = {
    'title':body.summary,
    'summary': body.summary,
    'location': "Manoa Innovation Center",
    'description': "helloworld@gmailbek.com",
    'start': {
      'dateTime': start,
      'timeZone': 'America/Adak',
    },
    'end': {
      'dateTime': end,
      'timeZone': 'America/Adak',
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
     console.log("Did not connect!", err);
     return;
   } else {
     console.log("Successfully connected!");
     

  let token = tokens.access_token;
  let calendarId = 'cohortuser19@gmail.com';
  let calendar = google.calendar('v3');

  gcal(token).events.update(calendarId,body.id,event, function(err,data){
    if(err) console.log(500,err);
    return calendar.events.list({
      auth: jwtClient,
      calendarId: 'cohortuser19@gmail.com'
    }, function(err,response){
        var events = response.items;

        res.json(events);
       })
      })
    }
  });
})


module.exports = route;