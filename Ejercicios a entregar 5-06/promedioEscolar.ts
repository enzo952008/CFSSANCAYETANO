import * as rls from "readline-sync"

function ingresarNotas(notas:number[]){
    for(let i=1; i<=3; i++){
    let notaAlumno:number=rls.questionInt("ingrese notas alumno: ");
    notas.push(notaAlumno)
    }
return notas
}

const notas:number[]=[]

function calcularPromedio(notas:number[]){
    let sumatoria:number=0
    let promedios:number=0
    notas.forEach(element => { 
        sumatoria=sumatoria+element
    });
    promedios=sumatoria/notas.length
    return promedios
}


 ingresarNotas(notas);
 console.log ("promedio alumno uno: ", calcularPromedio(notas));
 ingresarNotas(notas);
 console.log ("promedio alumno dos: ", calcularPromedio(notas));
 ingresarNotas(notas);
 console.log ("promedio alumno tres: ", calcularPromedio(notas));






