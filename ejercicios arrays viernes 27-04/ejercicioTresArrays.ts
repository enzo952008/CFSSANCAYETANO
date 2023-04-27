import * as rls from "readline-sync";
const numeros:number[]=[];
let positivos=0;
let negativos=0;
let ceros=0;
for (let i=0; i<= 10; i++){
    let numeroIngresado=rls.questionInt("ingrese los numeros: ")
    numeros.push (numeroIngresado)
}
numeros.forEach(numero=> {
    if (numero>0){
        positivos++
    }
    else if (numero<0){
        negativos++
    }
    else {
        ceros++
    }
});
console.log ( "cantidad de positivos: ",positivos);
console.log ( "cantidad de negativos: ", negativos);
console.log ( "cantidad de ceros: ",ceros);

