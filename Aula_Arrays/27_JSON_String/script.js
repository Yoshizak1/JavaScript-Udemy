let pessoa = {
    "nome": "joão",
    "idade": 28,
    "profissao": "programador",
    "hobbies": ["video game", "Leitura", "correr"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);
console.log(pessoaJSON);
console.log(pessoaJSON.hobbies[0]);