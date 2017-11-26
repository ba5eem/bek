require('dotenv').config();
const express     = require('express');
const app         = express();
const route       = express.Router();
const db          = require('../models');
const {user}      = db;


route.post('/', (req,res) => {
    var phone = req.body.phone.replace('-', '').replace('-', '');
    console.log("sent sms");
    const client = require('twilio')(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );
  client.messages.create({
    from: process.env.TWILIO_PHONE_NUMBER,
    to: "+1"+ phone,
    body: req.body.payload
  }).then((messsage) => console.log('message.sid', message.sid)).catch( err => {
    console.log(err);
  });


})

module.exports = route;