import * as rls from "readline-sync"
let numeroBase=rls.questionInt("ingrese numero base:, ");
let numeroExponente=rls.questionInt("ingrese numero exponente:, ");

function devolverPotencia(numeroBase, numeroExponente){
    let result=numeroBase
    for (let i=0; i<numeroExponente-1; i++){
        result=result*numeroBase
    }
    return result
}
console.log ("el resultado es:", devolverPotencia (numeroBase,numeroExponente));

