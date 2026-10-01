// EXERCÍCIO 35 - POLIMORFISMO
// Crie uma classe Animal com o método emitirSom().
// Crie as classes Cachorro e Gato herdando de Animal.
// Sobrescreva emitirSom() em cada classe com um som diferente.
// Coloque os animais em um array e chame o método de cada um.
//
// Escreva sua solução abaixo:

class Animal {
    emitirSom() {
        console.log("O animal emitiu um som.");
    }
}

class Cachorro extends Animal {
    emitirSom() {
        console.log("Au au!");
    }
}

class Gato extends Animal {
    emitirSom() {
        console.log("Miau!");
    }
}

let animais = [
    new Cachorro(),
    new Gato()
];

animais.forEach(animal => {
    animal.emitirSom();
});