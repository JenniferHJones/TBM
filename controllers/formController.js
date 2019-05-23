var db = require('../models');

// Routes to update db with new property
// =============================================================
module.exports = {
  addProperty: function(req, res) {
    db.Properties.create({
      address: req.body.address,
      location: req.body.location,
      company: req.body.company,
      propertyType: req.body.propertyType,
      beds: req.body.beds,
      baths: req.body.baths,
      size: req.body.size
    }).then(function(dbProperties) {
      res.json(dbProperties);
    });
  },
};
