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

db.user_model           = require("../models/user.model.js")(sequelize, Sequelize);
// db.country_model        = require("../models/country.model.js")(sequelize, Sequelize);
// db.email_template_model = require("../models/email_template.model.js")(sequelize, Sequelize);
// db.plan_model           = require("../models/plan")(sequelize, Sequelize);
// db.state_model          = require("../models/state")(sequelize, Sequelize);
// db.city_model           = require("../models/City")(sequelize, Sequelize);
// db.setting_model        = require("../models/setting.model.js")(sequelize, Sequelize);
// db.pincode_model        = require("../models/pincode.model.js")(sequelize, Sequelize);

module.exports = db;