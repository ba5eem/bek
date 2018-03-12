require('dotenv').config();
console.log(process.env.TWILIO_ACCOUNT_SID);
const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);
client.messages.create({
  from: process.env.TWILIO_PHONE_NUMBER,
  to: '+123-456-7890',
  body: "Hi BEK Team! Twilio was succesfully set up"
}).then((messsage) => console.log(message.sid));