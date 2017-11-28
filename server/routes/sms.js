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
  let body = req.body.data;
  let newShift = body[body.length-1];
  let link = newShift.htmlLink;

  let content = {
      phone: "612-998-2261",
      payload: `Shift Open! Shift Details here: ${link}`
    }
    const client = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );
  client.messages.create({
    from: process.env.TWILIO_PHONE_NUMBER,
    to: "+1"+ content.phone,
    body: content.payload
  }).then(() => console.log('Success!'))
    .catch( err => { console.log(err);
  });
})

module.exports = route;