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
    // leased: {
    //   type: BOOLEAN,
    //   allowNull: false
    // }
    // listedDate: {
    //   type: DataTypes.Date,
    // },
    // availableDate: {
    //   type: DataTypes.Date,
    // },
    beds: {
      type: DataTypes.STRING,
      allowNull: false
    },
    baths: {
      type: DataTypes.STRING,
      allowNull: false
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rentPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }
  });

  Property.associate = function(models) {
    Property.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Property;
};
