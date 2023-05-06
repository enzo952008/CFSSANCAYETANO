const arr1:boolean[]=[true,true,false,true,true,false,false,true,true,true,true,false,true,false,false,true];
let butacasOcupadas:number=0
let butacasDesocupadas:number=0

arr1.forEach(element => {
    let ocupado:boolean=true
    let libre:boolean=false
    if (element==ocupado){
        butacasOcupadas++
    }
    else{
    butacasDesocupadas++
    }
});
console.log ("cantidad de butacas ocupadas :",butacasOcupadas);
console.log ("cantidad de butacas desocupadas :",butacasDesocupadas);



