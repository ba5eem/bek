var util = require('util');

var gcal = require('google-calendar');

var config = require('./config');
var gcal = require('./GoogleCalendar');


const express          = require('express');
const app              = express();
const route            = express.Router();
const passport         = require('passport');



var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


route.use(passport.initialize());


passport.use(new GoogleStrategy({
    clientID: config.consumer_key,
    clientSecret: config.consumer_secret,
    callbackURL: "http://localhost:8080/cal/auth/callback",
    scope: ['openid', 'email', 'https://www.googleapis.com/auth/calendar'] 
  },
  function(accessToken, refreshToken, profile, done) {
    profile.accessToken = accessToken;
    return done(null, profile);
  }
));

route.get('/auth',
  passport.authenticate('google', { session: false }));

route.get('/auth/callback', 
  passport.authenticate('google', { session: false, failureRedirect: '/login' }),
  function(req, res) { 
    req.session.access_token = req.user.accessToken;
    res.redirect('/cal');
  });


/*
  ===========================================================================
                               Google Calendar
  ===========================================================================
*/

route.all('/', function(req, res){
  
  if(!req.session.access_token) return res.redirect('/auth');
  
  //Create an instance from accessToken
  var accessToken = req.session.access_token;

  gcal(accessToken).calendarList.list(function(err, data) {
    if(err) return res.send(500,err);
    return res.send(data);
  });
});

route.all('/:calendarId', function(req, res){
    console.log(req.params.calendarId);
  if(!req.session.access_token) return res.redirect('/auth');
  
  //Create an instance from accessToken
  var accessToken     = req.session.access_token;
  console.log(accessToken);
  var calendarId      = req.params.calendarId;
  
  gcal(accessToken).events.list(calendarId, {maxResults:10}, function(err, data) {
    if(err) return res.send(500,err);
    
    //console.log(data)
    if(data.nextPageToken){
      gcal(accessToken).events.list(calendarId, {maxResults:10, pageToken:data.nextPageToken}, function(err, data) {
        //console.log(data.items)
      })
    }
    
    
    return res.send(data);
  });
});


route.all('/:calendarId/add', function(req, res){
  console.log('something')
  console.log(req.params.calendarId);
  
  if(!req.session.access_token) return res.redirect('/auth');
  
  var accessToken     = req.session.access_token;
  var calendarId      = req.params.calendarId;
  var text            = req.query.text;

  var event = {
  'summary': 'Google I/O 2015',
  'location': '800 Howard St., San Francisco, CA 94103',
  'description': 'A chance to hear more about Google\'s developer products.',
  'start': {
    'dateTime': '2017-11-28T09:00:00-07:00',
    'timeZone': 'America/Los_Angeles',
  },
  'end': {
    'dateTime': '2017-11-28T17:00:00-07:00',
    'timeZone': 'America/Los_Angeles',
  },
  'recurrence': [
    'RRULE:FREQ=DAILY;COUNT=2'
  ],
  'attendees': [
    {'email': 'lpage@example.com'},
    {'email': 'sbrin@example.com'},
  ],
  'reminders': {
    'useDefault': false,
    'overrides': [
      {'method': 'email', 'minutes': 24 * 60},
      {'method': 'popup', 'minutes': 10},
    ],
  },
};


  gcal(accessToken).events.insert(calendarId, event, function(err, data) {
    if(err) return res.send(500,err);
    return res.redirect('/cal/'+calendarId);
  });
});



route.all('/:calendarId/:eventId', function(req, res){
  
  if(!req.session.access_token) return res.redirect('/auth');
  
  //Create an instance from accessToken
  var accessToken     = req.session.access_token;
  var calendarId      = req.params.calendarId;
  var eventId         = req.params.eventId;






  
  gcal(accessToken).events.get(calendarId, eventId, function(err, data) {
    if(err) return res.send(500,err);
    return res.send(data);
  });
});



route.all('/:calendarId/:eventId/remove', function(req, res){
  
  if(!req.session.access_token) return res.redirect('/auth');
  
  var accessToken     = req.session.access_token;
  var calendarId      = req.params.calendarId;
  var eventId         = req.params.eventId;
  
  gcal(accessToken).events.delete(calendarId, eventId, function(err, data) {
    if(err) return res.send(500,err);
    return res.redirect('/cal/'+calendarId);
  });
});

module.exports = route;
