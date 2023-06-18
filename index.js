const express = require("express");
const { crearApi } = require("./routes");
const cors = require("cors");
const PUERTO = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res)=>{
  res.json({message:"Bienvenido a mi API :)"});
});
crearApi(app);
app.listen(PUERTO, ()=>{
  console.log(`http://localhost:${PUERTO}/`);
});



