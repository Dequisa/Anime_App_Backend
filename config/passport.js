const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
// const connection = require("./database");
// const User = connection.models.User;

passport.use(
  new LocalStrategy(function (username, password, done) {
    User.findOne({ username: username })
      .then((user) => {
        if (!user) {
          return done(null, false, { message: "Incorrect username." });
        }

        // Funtion defined at bottom of app.js
        const isValid = validPassword(password, user.hash, user.salt);

        if (isValid) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      })
      .catch((err) => {
        done(err);
      });
  })
);

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

passport.deserializeUser((userId, cb) => {
  User.findById(userId)
    .then((user) => {
      cb(null, user);
    })
    .catch((err) => cb(err));
});

module.exports = passport;
