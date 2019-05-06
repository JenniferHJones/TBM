const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

// Telling passport to use a Local Strategy (we want login with a username/email and password)
passport.use(
  new LocalStrategy(
    // The customer will sign in using an email, rather than a "username"
    {
      usernameField: "email"
    },
    function(email, password, done) {
      // console.log("is this working for start");
      // When a customer tries to sign in this code runs
      db.Customer.findOne({
        where: {
          email: email
        }
      }).then(function(dbCustomer) {
        // console.log("*****Is this working for email?*****", dbCustomer);
        // If there's no customer with the given email
        if (!dbCustomer) {
          console.log("*****Incorrect email!*****");
          return done(null, false, {
            message: "Incorrect email."
          });
        }
        // If there is a customer with the given email, but the password the customer gives us is incorrect
        else if (!dbCustomer.validPassword(password)) {
          console.log("*****Bad password!*****");

          return done(null, false, {
            message: "Incorrect password."
          });
        }
        // If none of the above, return the customer
        return done(null, dbCustomer);
      });
    }
  )
);

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
passport.serializeUser(function(customer, cb) {
  cb(null, customer);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
