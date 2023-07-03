import "dotenv/config"
import express from "express"
import cors from "cors"
import db from "./config/mongo";
import { router } from "./routes";
db().then(()=>console.log("conexion Ready"))

const PORT = process.env.PORT || 3001;
const app = express()
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(router)







app.listen(PORT,()=>console.log("listo en el puerto",PORT))



