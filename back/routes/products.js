const express=require("express")
const router=express.Router();

//Se trae la repuesta json desde el controlador (productsController) 
const {getProducts, newProduct}=require("../controller/productsController")

//Establecemos la ruta que queremos ver el (getProducts)
router.route('/productos').get(getProducts)

//Establecemos la ruta para crear nuevo producto
router.route('/producto/nuevo').post(newProduct)

module.exports=router;