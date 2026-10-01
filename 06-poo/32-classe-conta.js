// EXERCÍCIO 32 - ENCAPSULAMENTO
// Crie uma classe ContaBancaria com o campo privado #saldo.
// Crie os métodos depositar(valor), sacar(valor) e consultarSaldo().
// Não permita saque maior que o saldo disponível.
//
// Escreva sua solução abaixo:

class ContaBancaria {
    #saldo = 0;

    depositar(valor) {
        this.#saldo += valor;
    }

    sacar(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
        } else {
            console.log("Saldo insuficiente");
        }
    }

    consultarSaldo() {
        console.log(`Saldo: R$ ${this.#saldo}`);
    }
}

let conta = new ContaBancaria();

conta.depositar(1000);
conta.sacar(300);
conta.consultarSaldo();