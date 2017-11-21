const express          = require('express');
const app              = express();
const route            = express.Router();
const passport         = require('passport');
const passportSetup    = require('../config/passport-setup');

const authCheck = (req, res, next) => {
    if(!req.user){
        //if user is not logged in:
        res.redirect('/auth/login');
    } else {
       //if logged in go onto next
        next();
    }
};

route.get('/', authCheck, (req, res) => {
    res.render('profile', { user: req.user });
});

module.exports = route;
