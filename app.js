import express  from "express";
import * as dotenv from "dotenv";
import Dicas from "./src/controllers/Dicas.js";

dotenv.config();

const port =  process.env.PORT || 3000;
const url = 'http://127.0.0.1'
 const app = express()

 app.listen(port, ()=>{
    console.log(`servidor rodando na porta ${url}:${port}`)
 })

app.use(express.json())

Dicas.rotas(app)
