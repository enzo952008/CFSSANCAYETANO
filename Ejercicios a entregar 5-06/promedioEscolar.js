"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
function ingresarNotas(notas) {
    for (var i = 1; i <= 3; i++) {
        var notaAlumno = rls.questionInt("ingrese notas alumno: ");
        notas.push(notaAlumno);
    }
    return notas;
}
var notas = [];
function calcularPromedio(notas) {
    var sumatoria = 0;
    var promedios = 0;
    notas.forEach(function (element) {
        sumatoria = sumatoria + element;
    });
    promedios = sumatoria / notas.length;
    return promedios;
}
ingresarNotas(notas);
console.log("promedio alumno uno: ", calcularPromedio(notas));
ingresarNotas(notas);
console.log("promedio alumno dos: ", calcularPromedio(notas));
ingresarNotas(notas);
console.log("promedio alumno tres: ", calcularPromedio(notas));
