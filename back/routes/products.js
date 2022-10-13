const express=require("express")
const router=express.Router();

//Se trae la repuesta json desde el controlador (productsController) 
const {getProducts}=require("../controller/productsController")

//Establecemos la ruta que queremos ver el (getProducts)
router.route('/productos').get(getProducts)
module.exports=router;