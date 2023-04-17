"use strict";
exports.__esModule = true;
var base = 0;
var altura = 0;
var result = 0;
function calcularAreaTriangulo(base, altura) {
    return base * altura / 2;
}
for (var i = 1; i < 7; i++) {
    base = i;
    altura = i * 2;
    result = calcularAreaTriangulo(base, altura);
    console.log("el area del triangulo es: ", result);
}
