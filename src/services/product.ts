import { Product } from "../interface/product"
import ProductModel from "../models/product"

const insertProduct = async(product:Product)=>{

    const isRegisteredProduct = await getProduct(product.barcode)
    if(isRegisteredProduct.length>0) return isRegisteredProduct;

    const responseInsert= await ProductModel.create(product)
    return responseInsert
}


const getProduct = async(barcode:String)=>{
    const productObtained = await ProductModel.find({barcode:barcode})
    return productObtained
}

const searchProduct =async(product:Product)=>{
    const isRegisteredProduct = await getProduct(product.barcode)
    if(isRegisteredProduct.length>0) return true;
    return false;
}


export default {insertProduct, getProduct}