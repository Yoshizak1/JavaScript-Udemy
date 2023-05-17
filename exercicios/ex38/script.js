class carro {
    constructor(marca, cor, gasolinaRestante, consumo){
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
        this.consumo = consumo;
    }

    dirigir(km){
        let litrosConsumidos = km / this.consumo;
        this.gasolinaRestante -= litrosConsumidos;
    }

    abastecer(l) {
        this.gasolinaRestante += l;
    }

}

let carro = new carro("Vw", "cinza", 100, 14);
console.log(carro);
carro.dirigir(100);
carro.abastecer(10);
console.log(carro);
