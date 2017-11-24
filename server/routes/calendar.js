//jshint esversion: 6
const express     = require('express');
const Pusher      = require('pusher');
const app         = express();
const route       = express.Router();
const pusherConfig = require('../config/config.json');

// console.log("PusherConfig", pusherConfig.pusher.cluster);

const pusher = new Pusher({
  appId : pusherConfig.pusher.appId,
  key: pusherConfig.pusher.key,
  secret: pusherConfig.pusher.secret,
  cluster: pusherConfig.pusher.cluster,
  encrypted: true
});

route.get('/', (req,res)=>{

  pusher.trigger('bek', 'my-event', {
    "message": "win for team bek"
  });

  res.json('calendar page');
})

module.exports = route;