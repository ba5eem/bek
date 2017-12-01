require('dotenv').config();
const express     = require('express');
const app         = express();
const route       = express.Router();
const db          = require('../models');
const {log}       = require('../Lib');
const {getLocal}  = require('../Lib');
const gcal        = require('google-calendar');
const privatekey  = require('../config/privatekey.json');
const google      = require('googleapis');
const {user}      = db;
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const client      = require('twilio')(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );

const jwtClient   = new google.auth.JWT(
       privatekey.client_email,
       null,
       privatekey.private_key,
       ['https://www.googleapis.com/auth/calendar']);







route.post('/', (req,res) => {
  console.log('sms from routes--->',req.body)
  const client = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );
  client.messages.create({

    from: process.env.TWILIO_PHONE_NUMBER,
    to: "+1"+ req.body.phone,
    body: req.body.payload
  }).then((messsage) => console.log('message.sid', message.sid)).catch( err => {
    console.log(err);
  });
})
/*
route.post('/notify', (req,res) => {
  const link = "http://bek.ellamaearana.com/accept/";//change to local host for development
  let body = req.body[0].data;
  let newShift = body[body.length-1];
  let shiftId = newShift.id;
  user.findAll({
    raw:true,
    attributes: {
      exclude : ['googleid', 'familyname','givenname','createdAt','updatedAt','email','image','admin','name','hours']
    }
  })
  .then((users) => {
    let uriArr = []
    let date = newShift.date;
    for (var i = 0; i < users.length; i ++){
      let usersId = users[i].id;
      let usersNum = users[i].phone;
      let uri = link+usersId+shiftId;
      let content = {
        phone: usersNum,
        payload: `Shift Open - on ${date}! Shift Details here: ${uri}`
        }
      const client = require('twilio')(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
      );
      client.messages.create({
        from: process.env.TWILIO_PHONE_NUMBER,
        to: "+1"+ content.phone,
        body: content.payload
      }).then(()=>{
        console.log("succes");
        })
       }
    });
    res.json('success notify sms -its still commented out');
})
*/






route.post('/notify', (req,res) => {
  const link = "http://bek.ellamaearana.com/accept/";//change to local host for development
  let body = req.body[0].data;
  let newShift = body[body.length-1];
  let shiftId = newShift.id;
  user.findAll({
    raw:true,
    attributes: {
      exclude : ['googleid', 'familyname','givenname','createdAt','updatedAt','email','image','admin','name','hours']
    }
  })
  .then((users) => {
    let uriArr = []
    let date = newShift.date;
    for (var i = 0; i < users.length; i ++){
      let usersId = users[i].id;
      let usersNum = users[i].phone;
      let uri = link+usersId+shiftId;
      let payload = {userID: usersId}
      let content = {
        phone: usersNum,
        payload: `Shift Open - on ${date}! Shift Details here: ${uri}`
      }
      const client = require('twilio')(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
      );
      let requestPayload = {userID: usersId};
      client.messages.create({
        from: process.env.TWILIO_PHONE_NUMBER,
        to: "+1"+ content.phone,
        body: content.payload
      }).then({
        body: JSON.stringify(requestPayload),
        headers: {
          'accept': 'application/json'
        },
        json: true
      }).then(function(response) {
        console.log(response.body)
        callback(null, response.body);
      }).then(()=>{
        console.log("succes");
      })
     }
    });
    res.json('success notify sms -its still commented out');
})



route.post('/absent', (req,res) => {
  let numbers = req.body[0].data;
  let link = req.body[1].htmlLink


  numbers.forEach(function(phones){
    let content = {
        phone: phones,
        payload: `Someone Called Out - Shift just became available! Shift Details here: ${link}`
      }
      const client = require('twilio')(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );
    client.messages.create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: "+1"+ content.phone,
      body: content.payload
    }).then(()=>{
      console.log("succes");
    })
  })
  res.json('succes');
})



route.get('/res', (req,res)=>{
  let num = req.body.From;
  var filterOpts = {
    to: num,
    from: process.env.TWILIO_PHONE_NUMBER ,
    dateSent: "2017-11-30"
  }
  client.messages.list(filterOpts,function(err, data) {
    let copy = []
    data.forEach(function(message,index,array) {
      copy.push(message.body);
    });
    let body = copy[0];
    let idx = body.search(/accept/g);
    let check = body[idx]==='a' ? true : false;
    let uri = body.slice(idx+7);
    let userId = uri[0];
    let shiftId = uri.slice(1,uri.length);
    console.log('This must be true, its checking if this body contains the correct info: ',check);
    console.log('this includes the user id [0] and every after is the shift id :--',uri);
    console.log('userID :--',userId);
    console.log('shiftID :--',shiftId);
    //now that we have the userid - lets find the user object in our database
    user.findById(userId).then((user)=>{
      let email = user.email;//this should be user.email for production

    jwtClient.authorize(function (err, tokens) {
      if (err) { console.log(err);
        return;
      } else { console.log("Successfully connected!"); }
      
    let token = tokens.access_token;
    let calendarId = 'cohortuser19@gmail.com';
    let calendar = google.calendar('v3');
    //now that we have the shift id from the message body
    //lets look for it among our current shifts
    calendar.events.list({
        auth: jwtClient,
        calendarId: 'cohortuser19@gmail.com'
        }, function(err,response){
            var events = response.items;
            let data = events.filter((elem)=>{
              return elem.id === shiftId;
            })
    //now we have the event that matches lets update the description with the user email
    //this will assign them to the shift
    let local = data.pop()
    var event = {//all data should essentially stay the same
      'title':local.summary,
      'summary': local.summary,
      'location': local.location,
      'description': email, //this is the new piece of data
      'start': {
        'dateTime': local.start.dateTime,
        'timeZone': 'America/Adak',
      },
      'end': {
        'dateTime': local.end.dateTime,
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
    gcal(token).events.update(calendarId,shiftId,event, function(err,data){
      console.log(event);
      if(err) console.log(500,err);
      res.json('success');
    })
  })
});
/*KEEP EVERYTHING ABOVE THIS LINE*/
    })//end of user findby id
  });//end of client.messages.list function
})//end of route.get



route.post('/response', (req,res) => {
  const twiml = new MessagingResponse();
  console.log(req.body.Body);
  console.log(req.body.From);
  console.log('BODY!',req.body);
  if(req.body.Body == 'yes'){
    console.log('received yes reply')
    twiml.message('You replied YES, period')
  }else {
    console.log('received yes reply')
    twiml.message('You replied something else other than YES, bye')
  }
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
})

module.exports = route;