const {ProductSchema, Productos } = require("./product.model");

function setupModels(sequelize){
    Productos.init(ProductSchema, Productos.config(sequelize));
}

module.exports={setupModels}