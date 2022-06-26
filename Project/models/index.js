const config = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    config.db,
    config.user,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
        operatorsAliases: false,
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user_model = require("../models/user.model.js")(sequelize, Sequelize);
db.address_model = require("../models/address.model.js")(sequelize, Sequelize);
db.product_model = require("../models/product.model.js")(sequelize, Sequelize);

module.exports = db;