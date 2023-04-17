function cantidadDeDivisores(numero) {
    var divisores = 0;
    var numeroDivisor = 0;
    for (var i = 1; i <= numeroDivisor; i++) {
        if (numeroDivisor % i === 0) {
            divisores++;
        }
    }
    return divisores;
}
cantidadDeDivisores(16);
console.log(cantidadDeDivisores(16));
