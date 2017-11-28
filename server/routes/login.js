//jshint esversion: 6
const express     = require('express');
const app         = express();
const route       = express.Router();
const db          = require('../models');
const {user}      = db;

  route.post('/', (req,res) => {
    let body = req.body;
    let local = {};
    user.findAll({
      raw:true,
      where:{email: body.email}
    }).then((data) =>{
      let user = data.pop()
      let email = user.email;
      local.isLoggedIn = true;
      local.userExists = true;
      local.businessGroup = "Dev League";
      local.email = email;
      local.id = user.id;
      local.admin = user.admin;
      local.image = user.image;
      //console.log(local);
      return res.json(local);
    }).catch((err) =>{
      local.isLoggedIn = false;
      local.userExists = false;
      //console.log(local);
      return res.json(local)
    })
})




module.exports = route;