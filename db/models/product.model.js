const {Model, DataTypes, Sequelize} = require("sequelize");

const PRDUCT_TABLE = "productos";

const ProductSchema = {
    id:{
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
        unique:true
    },
    nombre:{
        allowNull: false,
        type: DataTypes.STRING
    },
    categoria:{
        allowNull: false,
        type: DataTypes.STRING,
    },
    guardado:{
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue:false
    },
    createAt: {
        allowNull:false,
        type: DataTypes.DATE,
        field:'create_at',
        defaultValue:Sequelize.NOW
    }
};
class Productos extends Model{
    static  assocciate(){

    }
    static config(sequelize){
        return {
            sequelize,
            tableName:PRDUCT_TABLE,
            modelName: "Productos",
            timestamps: false
        }
    }
}
module.exports={PRDUCT_TABLE, ProductSchema, Productos}