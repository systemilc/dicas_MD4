import { banco } from "../infra/banco";

class databaseMetodos{
    static gerarDica(){
        const x = Math.random() * banco.banco.length
        x = Math.floor(x)
        console.log(x)
        return banco.banco.length >= 1 ? banco.banco[x]: banco.banco
    }

    static novaDica(dica){
        banco.banco = [...banco.banco, dica]
        return banco.banco
    }
}