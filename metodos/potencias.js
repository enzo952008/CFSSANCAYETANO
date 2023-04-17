"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var numeroBase = rls.questionInt("ingrese numero base:, ");
var numeroExponente = rls.questionInt("ingrese numero exponente:, ");
var result = numeroBase;
if (numeroExponente == 0) {
    result = 1;
}
for (var i = 0; i < numeroExponente - 1; i++) {
    result = result * numeroBase;
    return result;
}
console.log("el resultado es:", devolverPotencia(numeroBase, numeroExponente));
