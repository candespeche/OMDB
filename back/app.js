const path = require("path");
const express = require("express");
const indexRouter = require("./routes/index");
const passport = require("passport");
const session = require("express-session");
const db = require("./config/db");
const app = express();
const bodyParser = require("body-parser");
const volleyball = require("volleyball");
const LocalStrategy = require("passport-local").Strategy;
const { User } = require("./models");
const cookieParser = require("cookie-parser");
app.use(volleyball);

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({ secret: "kndnt" }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(function(username, password, done) {
    console.log("EL LOCAL STRATEGY");
    User.findOne({ where: { username: username } }) // searching for the User
      .then(user => {
        if (!user) {
          return done(null, false, { message: "Incorrect username." });
        }
        if (!user.validatePassword(password)) {
          return done(null, false, { message: "Incorrect password." });
        }
        return done(null, user, { message: "OKAAAA" }); // the user is authenticated ok!! pass user to the next middleware in req object (req.user)
      })
      .catch(done);
  })
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findByPk(id).then(function(user) {
    done(null, user);
  });
});

app.use("/", express.static(path.join(__dirname, "public")));
app.use("/api", indexRouter);

app.get("/*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

db.sync().then(() => {
  console.log("SINCRO");
  app.listen(3000, function() {
    console.log("FUNCIONA");
  });
});

module.exports = app;
