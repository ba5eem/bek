const express          = require('express');
const app              = express();
const passport         = require('passport');
const bcrypt           = require('bcrypt');
const LocalStrategy    = require('passport-local').Strategy;
const saltRounds       = 12;
const route            = express.Router();
const db               = require('../models');
const {user}           = db;

route.get('/', (req,res) =>{
  res.json('logout api');
  // req.logout();
  // res.sendStatus(200);
});


module.exports = route;