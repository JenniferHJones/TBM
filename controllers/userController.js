const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// Routes
// =============================================================
module.exports = {
  validateToken: function(req, res) {
    return jwt.verify(req.body.token, "shhhhh", function(err, decoded) {
      if (err) {
        return res.status(400).send({ msg: "The token is bad!" });
      }
      return db.User.findOne({ where: { email: decoded.email } }).then(c =>
        res.status(200).send({ email: c.email, firstName: firstName })
      );
    });
  },
  login: function(req, res) {
    db.User.findOne({ where: { email: req.body.email } }).then(c => {
      if (!c) res.status(400).send({ msg: "Ivalid Email or Password" });

      bcrypt.compare(req.body.password, c.password, function(err, bcryptRes) {
        if (!bcryptRes)
          res.status(400).send({ msg: "Invlid Email or Password" });
        res.json({ email: c.email, token: token });
      });
    });
  },
  register: function(req, res) {
    // validate email with Regex (req.body.email); if it is invalid, return res.status(400).sent ({msg: "invalid email or password"})
    db.User.findOne({ where: { email: req.body.email } }).then(c => {
      if (c) res.status(400).send({ msg: "Invalid Email or Password" });
      bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
          db.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userType: req.body.userType,
            email: req.body.email,
            password: hash
          }).then(function(user) {
            const token = jwt.sign({ email: user.email }, "shhhhh");
            res.json({ email: user.email, token: token });
          });
        });
      });
    });
  }
};
