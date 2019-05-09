module.exports = function(sequelize, DataTypes) {
    var Listing = sequelize.define("Listing", {
      listedDate: {
        type: DataTypes.Date,
      },
      availableDate: {
        type: DataTypes.Date,
      },
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
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
      }

    });
    
  
    Listing.associate = function (models) {
      Listing.belongsTo(models.Property, {
        foreignKey: {
          allowNull: false,
        }
      });
    };
    return Listing;
  };