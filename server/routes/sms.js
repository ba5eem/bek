require('dotenv').config();
const express     = require('express');
const app         = express();
const route       = express.Router();
const db          = require('../models');
const {user}      = db;
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const got = require('got');
const google      = require('googleapis');
const privatekey  = require('../config/privatekey.json');
const gcal        = require('google-calendar');
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



/*route.post('/response', (req,res) => {
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
  res.json(req.body);
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
})*/

var client = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

route.post('/response', (req,res) => {
  const twiml = new MessagingResponse();
  let num = "+16122762292";
  var filterOpts = {
    to: num,
    from: process.env.TWILIO_PHONE_NUMBER ,
    dateSent: "2017-12-01"
  }
  /*BEGINNING OF IF YES CONDITION - ALL UPDATE CODE GOES WITHIN HERE*/
  if(req.body.Body == 'yes'){
    console.log('received yes reply')

    //first we need to get all messages with those filterOptions
    client.messages.list(filterOpts,function(err, data) {
      let copy = [] //set array to hold data
    data.forEach(function(message,index,array) {
      copy.push(message.body); //push all bodies from this date into copy
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
      let email = user.email; //we use the users email as a way to assign the shift

    //now we have enough information that we can begin updating the shift, first
    //we need authorization
      jwtClient.authorize(function (err, tokens) {
        if (err) {
          console.log(err);
          return;
        } else {
        console.log("Successfully connected!");
      }
      //set tokens and ids
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
        let data = events.filter((elem)=>{ //look for the event by id with filter
          return elem.id === shiftId; //return that event obj
        })
    //now we have the event that matches lets update the description with the user email
    //this will assign them to the shift
    let local = data.pop() // its 1 obj in an arr, to make life easy pop it likes it hot
    console.log('LOCAL---->', local)
    var event = {//all data should essentially stay the same
      'title':local.summary,
      'summary': local.summary,
      'location': local.location,
      'description': email, //this is the new piece of data - user.email :)
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
        }
      };
      //now we have the new event, lets update this event on google calendar
    gcal(token).events.update(calendarId,shiftId,event, function(err,data){
      console.log(event);
      if(err) console.log(500,err);
      res.json('success');
    })
      })
    });
  });
  });

    twiml.message('You replied YES, shift is now yours')
  }//end of IF YES CONDITION **********
  /*else {
    console.log('received yes reply')
    twiml.message('You replied something else other than YES, bye')
  }*/
  //res.writeHead(200, {'Content-Type': 'text/xml'});
  //res.end(twiml.toString());
  console.log('SUCCESS???')
})

module.exports = route;