import {Router} from "express"

const router = Router()

router.get("/api/productos",(req,res)=>{
  res.send("esta vacio")
})

router.post("api/product",(req,res)=>{
  
})

export {router};