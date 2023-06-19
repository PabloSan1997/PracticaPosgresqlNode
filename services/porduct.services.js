const { pool } = require("../db/config");
const { v4: uuidv4 } = require("uuid");
const { sequelize } = require("../db/sequelize");
const { models } = sequelize;
class ServicioProducts {
  async leerProductos() {
    // const [data] = await sequelize.query("SELECT * FROM productos");
    const data = await models.Productos.findAll();
    return data;
  }
  async agregarProducto(cuerpo) {
    const id = uuidv4();
    const result = await models.Productos.create({ ...cuerpo, id });
    return result;
  }
  async editarProducto(cuerpo) {
    const { id } = cuerpo;
    const data = await models.Productos.findOne({ id });
    const mira = await data.update(cuerpo);
    return mira;
  }
  async borrarProducto(id) {
    const borrar = await models.Productos.findOne({id});
    await borrar.destroy();
    return { message: "ELemento borrado con exito" };
  }
}

module.exports = { ServicioProducts };
