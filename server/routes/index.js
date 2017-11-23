//jshint esversion: 6
const express     = require('express');
const app         = express();
const route       = express.Router();
const users       = require('./users.js');
const calendar    = require('./calendar.js');
const shifts      = require('./shifts.js');
const auth        = require('./auth.js');
const profile     = require('./profile.js');
const roles       = require('./roles.js');
const passportSetup = require('../config/passport-setup');



route.use('/auth', auth);
route.use('/calendar', calendar);
route.use('/profile', profile);
route.use('/roles', roles);
route.use('/shifts', shifts);
route.use('/users', users);


module.exports = route;