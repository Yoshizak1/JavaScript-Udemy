class Conta {
    constructor(saldoC, saldoP, juros) {
        this.saldoC = saldoC;
        this.saldoP = saldoP;
        this.juros = juros;
    }

    deposito(valor) {
        this.saldoC += valor;
    }

    saque(valor) {
        this.saldoC -= valor;
    }

    transferenciaP(valor) {
        this.saldoC -= valor;
        this.saldoP += valor;
    }
    transferenciaC(valor) {
        this.saldoP -= valor;
        this.saldoC += valor;
    }

    jurosDeAniversario() {
        let juros = (this.saldoP * this.juros) / 100;
        this.saldoP += juros;
    }

}

class contaEspecial extends Conta {
    constructor(saldoC, saldoP, juros) {
        super(saldoC, saldoP, juros * 2);
    }
}


let conta = new Conta(1000, 5000, 1);

console.log(conta);
conta.saque(500);
console.log(conta);
conta.deposito(5000);
console.log(conta);
conta.transferenciaP(3000);
console.log(conta);
let conta2 = new contaEspecial(10000, 5000, 1);
console.log(conta2);
conta2.saque(5000)
console.log(conta2);
conta2.jurosDeAniversario();
console.log(conta2);
