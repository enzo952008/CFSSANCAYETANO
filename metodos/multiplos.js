function esMultiplos(num1, num2) {
    return num1 % num2 === 0 || num2 % num1 === 0;
}
console.log(esMultiplos(10, 5));
console.log(esMultiplos(15, 7));
console.log(esMultiplos(40, 3));
