var arr1 = [true, true, false, true, true, false, false, true, true, true, true, false, true, false, false, true];
var butacasOcupadas = 0;
var butacasDesocupadas = 0;
arr1.forEach(function (element) {
    var ocupado = true;
    var libre = false;
    if (element == ocupado) {
        butacasOcupadas++;
    }
    else {
        butacasDesocupadas++;
    }
});
console.log("cantidad de butacas ocupadas :", butacasOcupadas);
console.log("cantidad de butacas desocupadas :", butacasDesocupadas);
