class Cachorro {
    constructor(raca,patas,cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir() {
        console.log("Au Au");
    }
}

Cachorro.prototype.raca = 'SRD';

let patas = Symbol();
cachorro.prototype[patas] = 4;

let labrador = new Cachorro('Labrador', 'Amarelo');

labrador.latir();
console.log(Cachorro.prototype.raca);
console.log(labrador.raca);

// acessando symbol
console.log(Cachorro.prototype[patas]);

console.log(labrador[patas]);