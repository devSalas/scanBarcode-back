import {Schema, model} from "mongoose"
import { Product } from "../interface/product"

const ProductSchema = new Schema<Product>(
    {
        product:{
            type:String,
            required:true
        },
        barcode:{
            type:String,
            required:true
        },
        amount:{
            type:Number,
            required:true
        }
        
    },
    {
        timestamps:true,
        versionKey:false
    }
) 

const ProductModel = model('products',ProductSchema)

export default ProductModel