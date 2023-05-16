class Cachorro {
    constructor(raca,patas,cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir() {
        console.log("Au Au");
    }
}

Cachorro.prototype.patas = 4;

let labrador = new Cachorro('Labrador', 'Amarelo');
console.log(labrador);
console.log(labrador.patas);
labrador.latir();