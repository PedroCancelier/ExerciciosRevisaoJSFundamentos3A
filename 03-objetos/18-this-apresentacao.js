// EXERCÍCIO 18 - UTILIZANDO THIS
// Crie um objeto pessoa com nome, profissao e um método apresentar().
// O método deve utilizar this e retornar uma frase de apresentação.
//
// Escreva sua solução abaixo:

const pessoa = {
    nome: "Pedro",
    profissao: "Dev",
    apresentar() {
        return `Olá! meu nome é ${this.nome}  e sou ${this.profissao}`;

    }

}

console.log(pessoa.apresentar())