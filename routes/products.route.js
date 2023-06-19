const express = require("express");
const { ServicioProducts } = require("../services/porduct.services");
const servicios = new ServicioProducts();
const routeProduct = express.Router();

routeProduct.get("/", async (req, res)=>{
    try {
        const data = await servicios.leerProductos();
        res.json(data);
    } catch (error) {
       res.status(404).json({message:"no se pudo"});
    }
});
routeProduct.post("/", async (req, res)=>{
    try {
        const data = await servicios.agregarProducto(req.body);
        res.json(data);
    } catch (error) {
       res.status(404).json({message:"no se pudo"});
    }
});
routeProduct.delete("/", async (req, res)=>{
    try {
        const data = await servicios.borrarProducto(req.body.id);
        res.json(data);
    } catch (error) {
       res.status(404).json({message:"no se pudo"});
    }
});
routeProduct.patch("/", async (req, res)=>{
    try {
        const data = await servicios.editarProducto(req.body);
        res.json(data);
    } catch (error) {
       res.status(404).json({message:"no se pudo"});
    }
});
module.exports={routeProduct}