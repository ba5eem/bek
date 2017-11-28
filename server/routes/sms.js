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
  let uri = "http://bit.ly/2k61tbK"
  let body = {
      phone: "612-998-2261",
      payload: `Shift Open! Shift Details here: ${uri}`
    }
    const client = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );
  client.messages.create({
    from: process.env.TWILIO_PHONE_NUMBER,
    to: "+1"+ body.phone,
    body: body.payload
  }).then(() => console.log('Success!'))
    .catch( err => { console.log(err);
  });
})

module.exports = route;