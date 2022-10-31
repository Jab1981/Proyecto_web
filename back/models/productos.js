const mongoose=require("mongoose")

//Construccion del esquema json
const productosSchema=mongoose.Schema({
    nombre:{
        type:String,
        required: [true,"Por ingrese el nombre del producto."],
        trim:true,
        maxLength: [120,"El nombre del producto no debe supero los caracteres permitidos."]
    },
    precio:{
        type:Number,
        required: [true,"Por favor registre el valor del producto."],
        maxLength: [8,"El precio del producto no puede estar por encima de 99.999.999"],
        default: 0.0
    },
    descripcion:{
        type:String,
        required: [true,"Por favor ingrese la descripcion del producto."]
    },
    calificacion:{
        type:Number,
        default:0
    },
    imagen:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    categoria:{
        type:String,
        required: [true,"Por favor seleccione la categoria del producto."],
        enum:{
            values:[
                "Impresora 3D",
                "Placas",
                "Insumos"
            ]
        }
    },
    vendedor: {
        type:String,
        required: [true,"Por favor ingrese el nombre del vendedor"]
    },
    invenatario:{
        type:Number,
        required: [true,"Por favor registre elnumero de stock del producto"],
        maxLength: [5,"Cantidad del producto no puede superar 99999"],
        default:0
    },
    numCalificaciones:{
        type:Number,
        default:0
    },
    opiniones:[
        {
            nombreCliente:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comentario:{
                type:String,
                required:true
            }
        }
    ],
    fechaCreacion:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model("productos",productosSchema)