import * as rls from "readline-sync"


let llegadacolectivo: string
console.log ("esperando el colectivo");
llegadacolectivo=rls.question ("llego el colectivo? (S/N): ");
while (llegadacolectivo== "N") {
    console.log("sigo esperando");
    llegadacolectivo=rls.question ("llego el colectivo? (S/N): ");
}
console.log ("me subo al colectivo");



