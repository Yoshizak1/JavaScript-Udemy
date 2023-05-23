const validarDataNasc = /[0-31]{2}[/][0-12]{2}[/][1920-2020]{4}/;

console.log(validarDataNasc('05/02/2000'));
console.log(validarDataNasc('5/2/2000'));
console.log(validarDataNasc('05-02-2000'));
console.log(validarDataNasc('05/02/00'));
console.log(validarDataNasc('12/12/1999'));
console.log(validarDataNasc('99/99/9999'));
console.log(validarDataNasc('31/02/2010'));