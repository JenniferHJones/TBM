var db = require("../models");

// Routes to update db with new property
// =============================================================
module.exports = {
  addProperty: function(req, res) {
    db.Property.create({
      address: req.body.address,
      location: req.body.location,
      companyName: req.body.companyName,
      propertyType: req.body.propertyType,
      beds: req.body.beds,
      baths: req.body.baths,
      size: req.body.size,
      rentPrice: req.body.rentPrice,
      UserId: req.body.UserId
    })
      .then(function(dbProperties) {
        res.json(dbProperties);
      })
      .catch(e => res.status(400).send({ msg: "error adding property", e }));
  }
};
