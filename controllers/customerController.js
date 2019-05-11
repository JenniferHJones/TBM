const db = require("../models");
const jwt = require("jsonwebtoken");

// Routes
// =============================================================
module.exports = {
  validateToken: function(req, res) {
    return jwt.verify(req.body.token, "shhhhh", function(err, decoded) {
      if (err) {
        return res.status(400).send({ msg: "The token is bad!" });
      }
      return res.status(200).send({ msg: "The token is good!" });
    });
  },
  login: function(req, res) {
    db.Customer.findOne({ where: { email: req.body.email } }).then(customer => {
      if (!customer) res.status(400).send({ msg: "Ivalid Email or Password" });

      bcrypt.compare(req.body.email);
    });
    res.json({ email: customer.email });
  },
  register: function(req, res) {
    // validate email with Regex (req.body.email); if it is invalid, return res.status(400).sent ({msg: "invalid email or password"})
    db.Customer.findOne({ where: { email: req.body.email } }).then(customer => {
      if (customer) res.status(400).send({ msg: "Invalid Email or Password" });
    });
    db.Customer.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userType: req.body.userType,
      email: req.body.email,
      password: req.body.password
    })
      .then(function(customer) {
        const token = jwt.sign({ email: customer.email }, "shhhhh");
        res.json({ email: customer.email, token: token });
      })
      .catch(e => res.status(400).send({ msg: e }));
  }
};
