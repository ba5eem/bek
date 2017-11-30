const express     = require('express');
const app         = express();
const route       = express.Router();
const db          = require('../models');
const {user}      = db;


route.get('/:id', (req,res) =>{
    console.log(req.body)
  res.json('ola')
});



module.exports = route;