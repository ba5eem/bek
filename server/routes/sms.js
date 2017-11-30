require('dotenv').config();
const express     = require('express');
const app         = express();
const route       = express.Router();
const db          = require('../models');
const {user}      = db;
const MessagingResponse = require('twilio').twiml.MessagingResponse;

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
  let numbers = req.body[1].data; //this is an array for numbers
  let body = req.body[0].data;
  let newShift = body[body.length-1];
  let link = newShift.htmlLink;
  let date = newShift.date;


// numbers.forEach(function(phones){
//   let content = {
//       phone: phones,
//       payload: `Shift Open - on ${date}! Shift Details here: ${link}`
//     }
//     const client = require('twilio')(
//     process.env.TWILIO_ACCOUNT_SID,
//     process.env.TWILIO_AUTH_TOKEN
//   );
//   client.messages.create({
//     from: process.env.TWILIO_PHONE_NUMBER,
//     to: "+1"+ content.phone,
//     body: content.payload
//   }).then(()=>{
//     console.log("succes");
//   })
//   })
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



route.post('/response', (req,res) => {
  const twiml = new MessagingResponse();
  console.log(req.body.Body);
  console.log(req.body.From);
  if(req.body.Body == 'yes'){
    console.log('received yes reply')
    twiml.message('You replied YES, period')
  }else {
    console.log('received yes reply')
    twiml.message('You replied something else other than YES, bye')
  }
  console.log('INCOMING MSG:', req.body.Body)
  res.json(data)
})

module.exports = route;