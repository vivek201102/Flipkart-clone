module.exports = (sequelize, Sequelize)=>{
    const Products = sequelize.define("product",{
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },

        name:{
            type:Sequelize.INTEGER,
            allowNull: false,
        },

        image:{
            type:Sequelize.STRING,
            allowNull:true,
        },

        description:{
            type:Sequelize.STRING,
            allowNull:false,
        },

        price:{
            type:Sequelize.INTEGER,
            allowNull:false,
        },

        category:{
            type:Sequelize.STRING,
            allowNull:false,
        }
    },
    {
        timestamps: false,
        freezeTableName: true // Model tableName will be the same as the model name
    });

    return Products;
}