const reg1 = new RegExp('bola');

console.log(reg1.test("tem bola?"));
console.log(reg1.test("não tem"));

const reg2 = /bola/;

let text = 'Tem bola na cesta';

console.log(reg2.test("tem bola?"));
console.log(reg2.test("não tem"));
console.log(reg2.test(text));

console.log(/quadrado/.test("Onde tem um quadrado"));
console.log(/quadrado/.test("222222222222222222quadrado333333333333333333"));