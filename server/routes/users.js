//jshint esversion: 6
const express     = require('express');
const app         = express();
const route       = express.Router();
const db          = require('../models');
const {user}      = db;


  route.post('/', (req,res) => {
    let body = req.body;
    let local = {};
    user.create({
      email: body.email,
      familyname: body.familyName,
      givenname: body.givenName,
      googleid: body.googleId,
      image: body.imageUrl,
      name: body.name
    })
    .then((user) => {
      local.fullname = user.name;
      local.id = user.id;
      local.image = user.image;
      res.json(local)
    })
    .catch((err) => {
      return res.json(null)
    })
  })



module.exports = route;