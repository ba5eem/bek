require('dotenv').config();
const express     = require('express');
const app         = express();
const route       = express.Router();
const db          = require('../models');
const {user}      = db;


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


// numbers.forEach(function(phones){
//   let content = {
//       phone: phones,
//       payload: `Shift Open! Shift Details here: ${link}`
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
res.json('success');
})

route.post('/absent', (req,res) => {
  let numbers = req.body[0].data;
  let link = req.body[1].htmlLink


  // numbers.forEach(function(phones){
  // let content = {
  //     phone: phones,
  //     payload: `Someone Called Out - Shift just became available! Shift Details here: ${link}`
  //   }
  //   const client = require('twilio')(
  //   process.env.TWILIO_ACCOUNT_SID,
  //   process.env.TWILIO_AUTH_TOKEN
  // );
  // client.messages.create({
  //   from: process.env.TWILIO_PHONE_NUMBER,
  //   to: "+1"+ content.phone,
  //   body: content.payload
  // }).then(()=>{
  //   console.log("succes");
  // })
  // })
  res.json('succes');
})

module.exports = route;