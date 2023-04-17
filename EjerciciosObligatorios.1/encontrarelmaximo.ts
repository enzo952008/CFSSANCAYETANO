import * as rls from "readline-sync"
let ingreseNumero:number= rls.questionInt ("ingrese numero: ")
let numeroMaximo= -99999
while (ingreseNumero !==0){
    if (ingreseNumero > numeroMaximo){
        numeroMaximo=ingreseNumero
    }
    ingreseNumero= rls.questionInt ("ingrese numero: ")
}
console.log("el numero maximo es: ",numeroMaximo)
