const producto=require("../models/productos")

exports.getProducts=(req,res,next)=>{
    res.status(200).json({
        sucess:true,
        message:"En esta ruta usted va poder ver todo el catalogo"
    })
}
//Creacion de un nunevo producto/api/productos
exports.newProduct=async(req,res,next)=>{
    const product=await producto.create(req.body);
    res.status(201).json({
        sucess:true,
        product
    })
}
