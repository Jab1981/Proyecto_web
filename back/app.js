const express=require("express");
const app=express();

app.use(express.json());

// Importamos las rutas 
const productos=require("./routes/products")

//Sujeta a la ruta en el navegador
app.use('/api',productos)

module.exports=app
