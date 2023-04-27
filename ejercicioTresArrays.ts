const numeros:number[]= [1,2,0,-3,0,5,-7,8,0];
let positivos=0;
let negativos=0;
let ceros=0;

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
//grupo con candela Araneta
