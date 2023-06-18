const express = require("express");
const { routeProduct } = require("./products.route");

const routes = express.Router();

function crearApi(app){
    app.use("/api/v1", routes);
    routes.use("/productos", routeProduct);
}
module.exports={crearApi}