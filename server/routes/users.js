//jshint esversion: 6
const express     = require('express');
const app         = express();
const route       = express.Router();

route.get('/', (req,res)=>{
  res.json('users page');
})

module.exports = route;