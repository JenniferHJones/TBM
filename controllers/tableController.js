var db = require("../models");

// Routes to fetch data for tables
// =============================================================
module.exports = {
  tableFindAll: function(req, res) {
    console.log(req.params);
    db.Property.findAll({ where: { userId: req.params.id } }).then(function(
      dbProperty
    ) {
      res.json(dbProperty);
    });
  },
  tableFindById: function(req, res) {
    db.Property.findById(req.params.id)
      .then(dbProperty => res.json(dbProperty))
      .catch(err => res.status(422).json(err));
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
