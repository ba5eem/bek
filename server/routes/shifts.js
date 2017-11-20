const express          = require('express');
const app              = express();
const passport         = require('passport');
const bcrypt           = require('bcrypt');
const LocalStrategy    = require('passport-local').Strategy;
const saltRounds       = 12;
const route            = express.Router();
const db               = require('../models');
const {shift}          = db;

route.get('/', ( req, res ) => {
  let value = req.isAuthenticated();
  user.findAll()
  .then((shifts) => {
    //VIP: filter out any user data
    //res.json(shifts);
    res.json("shifts page");
  });
});

route.get('/:id', ( req, res ) => {
  let value = req.isAuthenticated();
  let id = req.params.id;
  shift.findById(id)
  .then((shift) => {
    //VIP: filter out any user data
    res.json(shift);
  });
});

route.put('/:id', ( req, res ) => {
  let value = req.isAuthenticated();
  let id = req.params.id;
  let edited = req.body;

  return shift.findById(id)
  .then((shift) => {
    return shift.update(edited,{
      returning: true,
      plain: true
    })
    .then((shift)=>{
      //VIP: filter out any user data
      return res.json(shift);
    })
  })
})

route.delete('/:id', ( req, res ) => {
  let value = req.isAuthenticated();
  let id = req.params.id;
  let data = req.body;

  return shift.update({
      status: 'closed'
  }, {where     : [{id: id}],
      returning : true,
      plain     : true
  }).then((user) => {
      //VIP: filter out any user data
    res.json(shift);
  })
});


module.exports = route;