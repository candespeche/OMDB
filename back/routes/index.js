const express = require("express");
const router = express.Router();
const path = require("path");
const passport = require("passport");
const { User } = require("../models");

router.post("/login", passport.authenticate("local"), function(req, res) {
  console.log("POST LOGIN AUTH");
  console.log(req.isAuthenticated());
  res.send(req.user);
});

router.post("/register", function(req, res) {
  console.log("entre al post");
  User.create({
    username: req.body.username,
    password: req.body.password
  })
    .then(user => {
      res.send(user);
    })
    .then(() => {
      console.log("usuario creado!");
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/logout", function(req, res) {
  req.logout();
  res.send(req.user);
  //res.redirect("/")
});

module.exports = router;
