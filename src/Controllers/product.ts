import {Request,Response} from "express"
import { handleHttp } from "../utils/error.handle"
import ServicesProduct from "../services/product"

const createProduct =async (req:Request,res:Response)=>{
    try{
       const  a =await ServicesProduct.insertProduct(req.body)
       return res.json(a)
    }catch{
        handleHttp(res,"ERROR_GET_ITEM")
    }

}

const getProduct = async (req:Request,res:Response)=>{
    try{
        const {barcode} = req.body
        console.log(barcode)
        const a = await ServicesProduct.getProduct(barcode);
        return res.json(a)
    }catch{

    }
}


export default {
    createProduct,
    getProduct,
}