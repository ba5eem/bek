const express     = require('express');
const app         = express();
const route       = express.Router();
const db          = require('../models');
const {user}      = db;


route.get('/', (req,res) =>{
  req.logout();
  res.sendStatus(200);
});



module.exports = route;