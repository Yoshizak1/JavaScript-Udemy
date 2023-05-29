const reg1 = /[12345]/;

console.log(reg1.test("temos o número 6"));
console.log(reg1.test("temos o número 2"));
console.log(reg1.test("temos o número 23"));
console.log(reg1.test("temos o número 26"));

const reg2 = /[0-9]/;

console.log(reg2.test("temos o número 6556464568434"));
console.log(reg2.test("temos o número"));