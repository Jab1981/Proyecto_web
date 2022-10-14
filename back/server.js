const app=require("./app")

//Setear archico config
const dotenv=require("dotenv");
const connectDatabase = require("./config/database");
dotenv.config  ({path:'back/config/config.env'})

//Configuramos la base de datos
connectDatabase();

//Llamammos al server
const server=app.listen(process.env.PORT,()=>{
    console.log(`Servidor iniciando en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})
