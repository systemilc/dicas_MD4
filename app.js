import express  from "express";

const port = 3002
 const app = express()

 app.listen(port, ()=>{
    console.log(`servidor rodando na porta ${port}`)
 })

app.use(express.json())
