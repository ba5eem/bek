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
  
  if(!req.session.access_token) return res.redirect('/auth');
  
  //Create an instance from accessToken
  var accessToken     = req.session.access_token;
  var calendarId      = req.params.calendarId;
  
  gcal(accessToken).events.list(calendarId, {maxResults:1}, function(err, data) {
    if(err) return res.send(500,err);
    
    console.log(data)
    if(data.nextPageToken){
      gcal(accessToken).events.list(calendarId, {maxResults:1, pageToken:data.nextPageToken}, function(err, data) {
        console.log(data.items)
      })
    }
    
    
    return res.send(data);
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

module.exports = route;
