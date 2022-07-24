import { banco } from "../infra/banco.js";

class databaseMetodos{
    static gerarDica(){
        let x = Math.random() * banco.arrBanco.length
        x = Math.floor(x)
        console.log(x)
        return banco.arrBanco.length >= 1 ? banco.arrBanco[x]: banco.arrBanco
    }

    static novaDica(dica){
        banco.arrBanco = [...banco.arrBanco, dica];
        return banco.arrBanco;

    }
}

export default databaseMetodos