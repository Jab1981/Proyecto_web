const producto=require("../models/productos")

const fetch=(url)=>import('node-fetch').then(({default:fetch})=>fetch(url));

//Creacion para la consulta de productos registrados en la base de datos GET
exports.getProducts=async(req,res,next)=>{
    const productos=await producto.find();   
    res.status(200).json({
        message:"En esta es su consulta",
        sucess:true,
        count:productos.length,
        productos
       
    })
}

//Consulta de un producto por ID
exports.getProductById=async(req,res,next)=>{
    const product=await producto.findById(req.params.id)
    if(!product){
        return res.status(404).json({
            message:"No se encuentra el producto",
            sucess:false,
        })
       
    }
    res.status(200).json({
        message:"En esta es su consulta",
        sucess:true,
        product
    })

}

// Update de un producto
//let product=await producto.findById(req.params.id) variable tipo modificable
//if(!product) se verifica que el objeto no existe para finalizar el proceso

exports.updateProduct=async(req,res,next)=>{
    let product=await producto.findById(req.params.id)
    if(!product){
        return res.status(404).json({
            message:"No se encuentra el producto",
            sucess:false,
        })
    }

//Si el objeto existe se ejecuta la actualizacion
// new:true Se valida solo los atributos nuevos o actualizados
    product=await producto.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    });

//Responde si el producto se ha actualizado
    res.status(200).json({
        message:"El producto se ha actualizado correctamente",
        sucess:true,
        product
    })

}
// Eliminacion de un producto
// return res.status(404).json si el objeto no existe, el metodo termina con return
exports.deleteProduct=async(req,res,next)=>{
    const product=await producto.findById(req.params.id)
    if(!product){
        return res.status(404).json({
            message:"No se encuentra el producto",
            sucess:false,
        })
    }
    await product.remove();
    res.status(200).json({
        message: "El producto fue eleminado correctamente.",
        sucess: true
    })
}

//Creacion de un nuevo producto/api/productos POST
exports.newProduct=async(req,res,next)=>{
    const product=await producto.create(req.body);
    res.status(201).json({
        sucess:true,
        product
    })
}

//Fetch accedemos a ciertos recursos segun la necesidad, ppodemos acceder a la informacion
//de todos los registros

//Ver todos los productos con fecth
function verProductos(){
    fetch ('http://localhost:4000/api/productos')
    .then (res=>res.json())
    .then (res=>console.log(res))
    .then (err=>console.error(err))
}
//verProductos();

//Ver productos por id con fecth
function verProductosPorID(id){
    fetch ('http://localhost:4000/api/producto/'+ id)
    .then (res=>res.json())
    .then (res=>console.log(res))
    .then (err=>console.error(err))
}

//verProductosPorID('6348ff5b5ddef4b45b4aff0e');