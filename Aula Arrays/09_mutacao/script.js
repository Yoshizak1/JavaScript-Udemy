let pessoa = {
    nome: "joão"
}

let pessoa2 = pessoa;

let pessoa3 = {
    nome: "matheus"
}

console.log(pessoa == pessoa2);
console.log(pessoa2 == pessoa3);
console.log(pessoa == pessoa3);

pessoa2.nome = "pedro";
console.log(pessoa.nome);
pessoa2.nome = "maria";
console.log(pessoa2.nome);