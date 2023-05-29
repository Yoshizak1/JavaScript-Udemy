const notab = /[^ab]/;

console.log(notab.test("a"));
console.log(notab.test("Aqui tem a"));

const nottoaz = /[^a-z]/;

console.log(nottoaz.test("123"));
console.log(nottoaz.test("asdadafawe"));

const az = /[a-z]/;

console.log(nottoaz.test("asdadafawe"));

