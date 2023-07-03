import {Router} from "express"
import ControllerProduct from "../Controllers/product"
const router = Router()

router.post("/api/product",ControllerProduct.createProduct)

router.get("/api/product",ControllerProduct.getProduct)

export {router};