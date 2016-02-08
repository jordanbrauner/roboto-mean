var express = require("express");
var app = express();
var passport = require("passport");

// Login check
app.post("/login",
  passport.authenticate("local", { successRedirect: "/",
                                   failureRedirect: "/login",
                                   failureFlash: true })
);

// app.post('/login',
//  passport.authenticate('local'),
//  function(req, res) {
//    // If this function gets called, authentication was successful.
//    // `req.user` contains the authenticated user.
//    res.redirect('/users/' + req.user.username);
//  });
