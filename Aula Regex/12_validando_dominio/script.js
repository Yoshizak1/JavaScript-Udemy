const validaDominio = /[?www.]\w+\.com.br|.com/;

console.log(validaDominio.teste("www.google.com"));
console.log(validaDominio.teste("www.horadecodar.com.br"));
console.log(validaDominio.teste("www.horadecodar"));
console.log(validaDominio.teste("horadecodar"));