import * as rls from "readline-sync"
let base=0
let altura=0
let result=0

function calcularAreaTriangulo(base,altura){
return base*altura/2
}
for (let i=1; i<7; i++){
    base=i;
    altura=i*2
    result=calcularAreaTriangulo(base,altura)
    console.log ("el area del triangulo es: ", result)
}

















