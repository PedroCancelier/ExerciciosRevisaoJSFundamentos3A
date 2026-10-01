// EXERCÍCIO 29 - ARRAY EM JSON
// Crie um array com três objetos de usuários contendo id, nome e email.
// Converta o array para JSON e mostre o resultado.
//
// Escreva sua solução abaixo:

let usuarios = [
    {
        id: 1,
        nome: "Pedro",
        email: "pedro@email.com"
    },
    {
        id: 2,
        nome: "João",
        email: "joao@email.com"
    },
    {
        id: 3,
        nome: "Maria",
        email: "maria@email.com"
    }
];

let usuariosJSON = JSON.stringify(usuarios);

console.log(usuariosJSON);