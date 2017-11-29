const express     = require('express');
const app         = express();
const route       = express.Router();
const db          = require('../models');
const {user}      = db;


route.get('/', (req,res) =>{
  let local = {};
  local.isLoggedOut = true;
  res.json(local)
});



module.exports = route;