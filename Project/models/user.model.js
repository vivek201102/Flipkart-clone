
module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("user", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        first_name: {
            allowNull: false,
            type: Sequelize.STRING,
        },
        last_name: {
            allowNull: false,
            type: Sequelize.STRING,
        },
        contact_no: {
            allowNull: false,
            type: Sequelize.INTEGER,
        },
        email: {
            allowNull: false,
            type: Sequelize.STRING,
        },
        gender: {
            type: Sequelize.ENUM,
            values: ['m', 'f', 'o'],
            defaultValue: 'm'
        },
        
        password: {
            allowNull: false,
            type: Sequelize.STRING,
        }
    }, {
        timestamps: false,
        freezeTableName: true // Model tableName will be the same as the model name
    });
    return Users;
};