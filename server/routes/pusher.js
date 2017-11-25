//jshint esversion: 6
const express     = require('express');
const Pusher      = require('pusher');
const app         = express();
const route       = express.Router();
const pusher = new Pusher({
  appId: '435423',
  key: '945713eb9dbed89bd426',
  secret: '241a44fed96145f4cb52',
  cluster: 'us2',
  encrypted: true
});

route.get('/', (req,res)=>{

  pusher.trigger('bek', 'my-event', {
    "message": "win for team bek"
  });
  
  res.json('calendar page');
})

module.exports = route;