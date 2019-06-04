var db = require("../models");

// Routes to fetch data for tables
// =============================================================
module.exports = {
  tableFindAll: function(req, res) {
    db.Property.findAll({ where: { userId: req.params.id } }).then(function(
      dbProperty
    ) {
      res.json(dbProperty);
    });
  },
  listingsFindAll: function(req, res) {
    db.Property.findAll({
      where: { userId: req.params.id, leased: true }
    }).then(function(dbProperty) {
      res.json(dbProperty);
    });
  },
  updateLeased: function(req, res) {
    db.Property.update(
      { leased: req.body.action },
      { where: { id: req.params.id } }
    )
      .then(d => res.status(200).send(d))
      .catch(err => res.status(422).json(err));
  }
};
