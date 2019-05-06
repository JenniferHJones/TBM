const db = require("../../models");

// This is middleware for restricting unique email addresses during registration
module.exports = function(req, res, next) {
  db.Customer.findOne({ where: { email: req.body.email } }).then(function(
    err,
    exists
  ) {
    // console.log("found one", exists, "hello Customer");
    if (err) {
      return next(err);
    }
    if (exists) {
      res.status(422);
      // console.log("This test should not pass.")
      return res.send(new Error("Duplicate email address"));
    }
    next();
  });
};
