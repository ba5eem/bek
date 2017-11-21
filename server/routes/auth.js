const express          = require('express');
const app              = express();
const route            = express.Router();
const passport         = require('passport');
const passportSetup    = require('../config/passport-setup');


// auth login
route.get('/login', (req, res) => {
    res.json('login');
});

// auth logout
route.get('/logout', (req, res) => {
  //handle with passport
  res.json('logging out');
});

// auth with google+
route.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// callback route for google to redirect to
route.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.redirect('/auth/login');
});






module.exports = route;
