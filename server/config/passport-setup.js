const passport         = require('passport');
const GoogleStrategy   = require('passport-google-oauth2').Strategy;
const keys             = require('./keys');
const db               = require('../models');
const {user}           = db;

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken , profile, done) => {
        // passport callback function
        console.log('profile id: ',profile.id);
        db.user.create({
          username: profile.displayName,
          googleid: profile.id,
          phonenumber: "8081234567",
          roleid: 1
        }).then((newUser)=>{
          console.log('newuser: ', newUser);
        })


    })
);
