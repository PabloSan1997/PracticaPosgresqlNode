const { pool } = require("../db/config");

class ServicioProducts {
    async leerProductos(){
            const data = await pool.query("SELECT * FROM productos");
            return data.rows;
    }
    async agregarProducto(cuerpo){
        const {id, nombre, categoria, guardado} = cuerpo;
        const texto = "INSERT INTO productos (id, nombre, categoria, guardado) VALUES($1, $2, $3, $4) RETURNING *";
        const result = await pool.query(texto, [id, nombre, categoria, guardado]);
        return result.rows[0];
    }
    async editarProducto({id, nombre, categoria, guardado}){
        const testo = "UPDATE productos SET nombre = $2, categoria = $3, guardado=$4 WHERE id = $1 RETURNING *";
        const result = await pool.query(testo, [id, nombre, categoria, guardado]);
        return result.rows[0];
    }
    async borrarProducto(id){
        await pool.query("DELETE FROM productos WHERE id = $1", [id]);
        return {message:"ELemento borrado con exito"}
    }
}

module.exports = {ServicioProducts}