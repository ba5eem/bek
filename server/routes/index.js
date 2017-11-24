//jshint esversion: 6
const express     = require('express');
const app         = express();
const route       = express.Router();
const users       = require('./users.js');
const auth        = require('./auth.js');
const shifts      = require('./calendar.js');



route.use('/shifts', shifts);
route.use('/auth', auth);
route.use('/users', users);


module.exports = route;