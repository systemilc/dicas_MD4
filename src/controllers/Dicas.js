import DicasModel from "../models/dicasModel.js";
import databaseMetodos from "../utils/databaseMetodos.js";

class Dicas{
    static rotas(app){
        app.get('/dicas', (req, res)=>{
            const response = databaseMetodos.gerarDica()
            res.status(200).json(response)
        })

        app.post('/novo'), (req, res)=>{
            const dica = new DicasModel(...Object.values(req.body))
            const response = databaseMetodos.novaDica(dica)
            res.status(200).json(response)
        }
    }
   

    }

    export default Dicas