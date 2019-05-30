var db = require('../models');

// Routes to fetch data for tables
// =============================================================
module.exports = {
  tableFindAll: function(req, res) {
    db.Property.findAll({}).then(function(dbProperty) {
      res.json(dbProperty);
    });
  },
  tableFindById: function(req, res) {
    db.Property
      .findById(req.params.id)
      .then(dbProperty => res.json(dbProperty))
      .catch(err => res.status(422).json(err));
  }
}