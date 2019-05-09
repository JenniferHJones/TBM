module.exports = function(sequelize, DataTypes) {
  var Property = sequelize.define("Property", {
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    propertyType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    leased: {
      type: BOOLEAN,
      allowNull: false

    }
  });

  Property.associate = function (models) {
    Property.belongsTo(models.Customer, {
      foreignKey: {
        allowNull: false,
      }
    });
    Porperty.hasMany(models.Listing);
  };
  return Property;
};
