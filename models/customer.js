// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
const bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  const Customer = sequelize.define("Customer", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 40]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 40]
      }
    },
    account: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        len: [1]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4]
      }
    }
  });

  // Creating a custom method for our Customer model to check if an unhashed password was entered by the user
  // can be compared to the hashed password stored in the database
  Customer.prototype.validPassword = function(password) {
    console.log("testing password", password);
    const passed = bcrypt.compareSync(password, this.password);
    console.log("bcrypt result", passed);
    return passed;
  };

  // Hooks are automatic methods that run during various phases of the Customer Model lifecycle
  // Before a Customer is created, we automatically hash their password
  Customer.hook("beforeCreate", function(customer) {
    console.log("customer", customer);
    customer.password = bcrypt.hashSync(
      customer.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  //   Customer.associate = function(models) {
  //     Customer.hasMany(models.Transaction);
  //   };

  return Customer;
};
