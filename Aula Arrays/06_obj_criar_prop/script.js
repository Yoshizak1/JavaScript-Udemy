let pessoa = {
    nome: "joão",
    idade: 19,
    profissao: "Programador",
}

console.log(pessoa.nome);
delete pessoa.nome;
pessoa.casado = false;
console.log(pessoa);
pessoa.nome = "Pedro";