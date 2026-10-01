// EXERCÍCIO 34 - HERANÇA E SUPER
// Crie uma classe Pessoa com nome e um método apresentar().
// Crie a classe Funcionario que herde de Pessoa e receba também o cargo.
// Utilize super() no constructor e sobrescreva apresentar() incluindo o cargo.
//
// Escreva sua solução abaixo:

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}.`);
    }
}

class Funcionario extends Pessoa {
    constructor(nome, cargo) {
        super(nome);
        this.cargo = cargo;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e sou ${this.cargo}.`);
    }
}

let funcionario = new Funcionario("Pedro", "Desenvolvedor");

funcionario.apresentar();
