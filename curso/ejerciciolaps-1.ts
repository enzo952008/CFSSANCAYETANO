import * as rls from  "readline-sync";
const vuelta1: number = rls.questionFloat ("ingrese tiempo de vuelta1")
const vuelta2: number = rls.questionFloat ("ingrese tiempo de vuelta2")
const vuelta3: number = rls.questionFloat ("ingrese tiempo de vuelta3")
const vuelta4: number = rls.questionFloat ("ingrese tiempo de vuelta4")
const tiempototal: number = vuelta1 + vuelta2 + vuelta3 + vuelta4
console.log ("el tiempo total es de: ", vuelta1+vuelta2+vuelta3+vuelta4)
console.log ("el tiempo promedio es de ", tiempototal / 4 )
