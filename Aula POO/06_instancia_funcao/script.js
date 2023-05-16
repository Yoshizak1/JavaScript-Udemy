function criarCachorro(raca, patas, cor) {
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function(){
        console.log("AU AU");
    }
}

let doberman = criarCachorro('Doberman', 4, 'preta');
console.log(doberman);