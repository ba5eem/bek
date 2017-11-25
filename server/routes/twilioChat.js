require('dotenv').load()

const Twilio = require('twilio')
const chance = new require('chance')()
const express = require('express')
const app = express()
const route       = express.Router();
const AccessToken = Twilio.jwt.AccessToken
const ChatGrant = AccessToken.ChatGrant

route.get('/token', function (req, res) {
  const token = new AccessToken(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_API_KEY,
    process.env.TWILIO_API_SECRET
  )

  token.identity = chance.name()
  token.addGrant(new ChatGrant({
    serviceSid: process.env.TWILIO_CHAT_SERVICE_SID
  }))

  res.send({
    identity: token.identity,
    jwt: token.toJwt()
  })
})

module.exports = route;
