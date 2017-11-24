//jshint esversion: 6
const express     = require('express');
const Pusher      = require('pusher');
const app         = express();
const route       = express.Router();
require('dotenv').config();

const pusher = new Pusher({
  appId : process.env.PUSHER_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
  encrypted: true
});

route.get('/', (req,res)=>{

  pusher.trigger('bek', 'my-event', {
    "message": "win for team bek"
  });

  res.json('calendar page');
})

module.exports = route;