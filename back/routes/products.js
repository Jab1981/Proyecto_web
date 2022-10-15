const express=require("express")
const router=express.Router();

//Se trae la repuesta json desde el controlador (productsController) 
const {getProducts, newProduct, getProductById, updateProduct, deleteProduct}=require("../controller/productsController")

//Establecemos la ruta que queremos ver el producto (getProducts)
router.route('/productos').get(getProducts)

//Establecemos la ruta para crear nuevo producto Post
router.route('/producto/nuevo').post(newProduct)

//Establecemos la ruta que queremos ver producto por Id
router.route('/producto/:id').get(getProductById)

//Establecemos la ruta de actualizacion
router.route('/producto/:id').put(updateProduct);

//Establecemos la ruta para eliminar producto
router.route('/producto/:id').delete(deleteProduct);




module.exports=router;