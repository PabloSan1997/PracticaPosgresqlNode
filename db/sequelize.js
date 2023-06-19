const {Sequelize} = require("sequelize");
const { setupModels } = require("./models");
require("dotenv").config();

const URL_DATABASE = process.env.DB_URL;

const sequelize = new Sequelize(URL_DATABASE,{
    dialect: 'postgres',
    dialectOptions:{
        ssl:{
            rejectUnauthorized: false ,
            require: true
        }
    }
});
setupModels(sequelize);
sequelize.sync();
module.exports = {sequelize}