//jshint esversion: 6
const express     = require('express');
const app         = express();
const route       = express.Router();
const db          = require('../models');
const {user}      = db;


  route.get('/', (req,res) => {
    return res.json('auth page');
  })



module.exports = route;