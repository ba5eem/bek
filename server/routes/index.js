//jshint esversion: 6
const express     = require('express');
const app         = express();
const route       = express.Router();
const register    = require('./register.js');
const users       = require('./users.js');
const shifts      = require('./shifts.js');
const login       = require('./login.js');
const logout      = require('./logout.js');
const roles       = require('./roles.js');


route.use('/register', register);
route.use('/login', login);
route.use('/users', users);
route.use('/shifts', shifts);
route.use('/roles', roles);
route.use('/logout', logout);

module.exports = route;